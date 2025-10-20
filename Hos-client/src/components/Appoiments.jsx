import React, { useEffect, useState, useMemo } from 'react'
import { Tab, Nav, Form } from "react-bootstrap";
import Select from "react-select";
import { allAppointments, allDoc, allPatients } from '../services/CommenApi';

function Appoiments() {
  const [Alldoc, setAllDoc] = useState([]);
  const [AllPati, setAllPati] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [token, setToken] = useState("");

  const styles = {
    control: (base) => ({ ...base, width: "24rem" }),
    menu: (base) => ({ ...base, width: "24rem" }),
  };

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setToken(sessionStorage.getItem("token"))
    }
  }, [])

  useEffect(() => {
    if (token) {
      getAllAp();
      getAllDoc()
      getAllPatients()
    }
  }, [token]);

  const getAllAp = async () => {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    try {
      const res = await allAppointments(headers);
      if (res.status === 200) {
        setAppointments(res.data);
      } else {
        console.log("Failed to fetch appointments:", res);
      }
    } catch (err) {
      console.log("Error fetching appointments:", err);
    }
  };

  const getAllDoc = async () => {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    try {
      const res = await allDoc(headers);
      if (res.status === 200) {
        setAllDoc(res.data)
      } else {
        console.log("Failed to fetch doc:", res);
      }
    } catch (err) {
      console.log("Error fetching doc:", err);
    }
  };
  const getAllPatients = async () => {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    try {
      const res = await allPatients(headers);
      if (res.status === 200) {
        setAllPati(res.data)
      } else {
        console.log("Failed to fetch doc:", res);
      }
    } catch (err) {
      console.log("Error fetching doc:", err);
    }
  };

  const docName = useMemo(() => {
    return Alldoc.map((doc) => ({
      value: doc.firstName,
      label: doc.firstName,
    }));
  }, [Alldoc]);

  const docDepart = useMemo(() => {
    return Alldoc.map((dep) => ({
      value: dep.dept,
      label: dep.dept,
    }));
  }, [Alldoc]);

  const patientName = useMemo(() => {
    return AllPati.map((pe) => ({
      value: pe.firstName,
      label: pe.firstName,
    }));
  }, [AllPati]);

  return (
    <>
      <div className="mx-auto p-4">
        <h3 className="text-xl font-semibold">Appointments</h3>
        <p className="text-gray-500 mb-4">Manage your appointments</p>

        <Tab.Container defaultActiveKey="book">

          <Nav
            variant="tabs"
            className="border-b mb-6 flex flex-wrap gap-4"
          >
            <Nav.Item>
              <Nav.Link
                eventKey="book"
                className="!border-none !bg-transparent !px-2 !py-1 !text-gray-600 hover:!text-blue-600"
              >
                Book Appointment
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                eventKey="view"
                className="!border-none !bg-transparent !px-2 !py-1 !text-gray-600 hover:!text-blue-600"
              >
                View Appointments
              </Nav.Link>
            </Nav.Item>
          </Nav>


          <div className="mt-3">
            <Tab.Content>
              <Tab.Pane eventKey="book">
                <Form className="p-3">
                  <Form.Group className="mb-3" controlId="departmentSelect">
                    <Form.Label>Select Department</Form.Label>
                    <Select
                      options={docDepart}
                      placeholder="Select Department"
                      isSearchable
                      styles={styles}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="doctorSelect">
                    <Form.Label>Select Doctor</Form.Label>
                    <Select
                      options={docName}
                      placeholder="Select Doctor"
                      isSearchable
                      styles={styles}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="doctorSelect">
                    <Form.Label>Select Patient</Form.Label>
                    <Select
                      options={patientName}
                      placeholder="Select Patient"
                      isSearchable
                      styles={styles}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3 w-96" controlId="appointmentDate">
                    <Form.Label>Date</Form.Label>
                    <Form.Control type="date" />
                  </Form.Group>
                  <Form.Group className="mb-3 w-96" controlId="appointmentTime">
                    <Form.Label>Time</Form.Label>
                    <Form.Control type="time" />
                  </Form.Group>

                  <button className='btn btn-primary' type="submit">
                    Schedule
                  </button>
                </Form>
              </Tab.Pane>


              <Tab.Pane eventKey="view">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

                  {appointments.map((app, index) => (
                    <div
                      key={index}
                      className="bg-white border border-gray-200 shadow-sm rounded-2xl p-4 hover:shadow-md transition"
                    >
                      <p>
                        <span className="font-semibold text-gray-700">Patient Name:</span>{" "}
                        {app.patientName}
                      </p>
                      {/* <p>
                        <span className="font-semibold text-gray-700">Department:</span>{" "}
                        {app.department}
                      </p> */}
                      <p>
                        <span className="font-semibold text-gray-700">Doctor:</span>{" "}
                        {app.doctorName}
                      </p>
                      <p>
                        <span className="font-semibold text-gray-700">Date:</span> {app.date}
                      </p>
                      <p>
                        <span className="font-semibold text-gray-700">Time:</span> {app.time}
                      </p>
                      <p>
                        <span className="font-semibold text-gray-700">Status:</span> {app.status}
                      </p>

                      <div className="flex justify-end gap-2 mt-3">
                        <button className="bg-blue-500 text-white px-3 py-2 rounded-lg text-sm hover:bg-blue-600 transition">
                          Reschedule
                        </button>
                        <button className="bg-red-500 text-white px-3 py-2 rounded-lg text-sm hover:bg-red-600 transition">
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}




                </div>
              </Tab.Pane>
            </Tab.Content>
          </div>
        </Tab.Container>
      </div>
    </>
  )
}

export default Appoiments
