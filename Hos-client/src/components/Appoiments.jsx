import React, { useEffect, useState } from 'react'
import { Tab, Nav, Form } from "react-bootstrap";
import Select from "react-select";
import { allAppointments } from '../services/CommenApi';

function Appoiments() {
  const [appointments, setAppointments] = useState([]);
  const [token, setToken] = useState("");
// console.log("App=",appointments);

  const Deoptions = [
    { value: "cardiology", label: "Cardiology" },
    { value: "neurology", label: "Neurology" },
    { value: "orthopedics", label: "Orthopedics" },
    { value: "pediatrics", label: "Pediatrics" },
    { value: "radiology", label: "Radiology" },
  ];

  const Droptions = [
    { value: "Dr.Alex", label: "Dr.Alex" },
    { value: "Dr.Liya", label: "Dr.Liya" },
    { value: "Dr.Rosh", label: "Dr.Rosh" },
    { value: "Dr.Mim", label: "Dr.Mim" },
    { value: "Dr.Rosh", label: "Dr.Rosh" },
  ];

  const Proptions = [
    { value: "Alex", label: "Alex" },
    { value: "Dr.Liya", label: "Liya" },
    { value: "Rosh", label: "Rosh" },
    { value: "Mim", label: "Mim" },
    { value: "Rosh", label: "Rosh" },
  ];

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
    if(token){
      getAllAp();
    } 
  },[token]);

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
                      options={Deoptions}
                      placeholder="Select Department"
                      isSearchable
                      styles={styles}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="doctorSelect">
                    <Form.Label>Select Doctor</Form.Label>
                    <Select
                      options={Droptions}
                      placeholder="Select Doctor"
                      isSearchable
                      styles={styles}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="doctorSelect">
                    <Form.Label>Select Patient</Form.Label>
                    <Select
                      options={Proptions}
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

                  {/* Appointment 1 */}
                  <div className="bg-white border border-gray-200 shadow-sm rounded-2xl p-4 hover:shadow-md transition">
                    <p><span className="font-semibold text-gray-700">ID:</span> A001</p>
                    <p><span className="font-semibold text-gray-700">Appointment No:</span> 1001</p>
                    <p><span className="font-semibold text-gray-700">Department:</span> Cardiology</p>
                    <p><span className="font-semibold text-gray-700">Doctor:</span> Dr. Meera Nair</p>
                    <p><span className="font-semibold text-gray-700">Date:</span> 2025-10-22</p>
                    <p><span className="font-semibold text-gray-700">Time:</span> 10:30 AM</p>

                    <div className="flex justify-end gap-2 mt-3">
                      <button className="bg-blue-500 text-white px-3 py-2 rounded-lg text-sm hover:bg-blue-600 transition">
                        Reschedule
                      </button>
                      <button className="bg-red-500 text-white px-3 py-2 rounded-lg text-sm hover:bg-red-600 transition">
                        Delete
                      </button>
                    </div>
                  </div>

                  {/* Appointment 2 */}
                  <div className="bg-white border border-gray-200 shadow-sm rounded-2xl p-4 hover:shadow-md transition">
                    <p><span className="font-semibold text-gray-700">ID:</span> A002</p>
                    <p><span className="font-semibold text-gray-700">Appointment No:</span> 1002</p>
                    <p><span className="font-semibold text-gray-700">Department:</span> Orthopedics</p>
                    <p><span className="font-semibold text-gray-700">Doctor:</span> Dr. Ravi Menon</p>
                    <p><span className="font-semibold text-gray-700">Date:</span> 2025-10-23</p>
                    <p><span className="font-semibold text-gray-700">Time:</span> 11:00 AM</p>

                    <div className="flex justify-end gap-2 mt-3">
                      <button className="bg-blue-500 text-white px-3 py-2 rounded-lg text-sm hover:bg-blue-600 transition">
                        Reschedule
                      </button>
                      <button className="bg-red-500 text-white px-3 py-2 rounded-lg text-sm hover:bg-red-600 transition">
                        Delete
                      </button>
                    </div>
                  </div>

                  {/* Appointment 3 */}
                  <div className="bg-white border border-gray-200 shadow-sm rounded-2xl p-4 hover:shadow-md transition">
                    <p><span className="font-semibold text-gray-700">ID:</span> A003</p>
                    <p><span className="font-semibold text-gray-700">Appointment No:</span> 1003</p>
                    <p><span className="font-semibold text-gray-700">Department:</span> Dermatology</p>
                    <p><span className="font-semibold text-gray-700">Doctor:</span> Dr. Anjali Das</p>
                    <p><span className="font-semibold text-gray-700">Date:</span> 2025-10-24</p>
                    <p><span className="font-semibold text-gray-700">Time:</span> 09:45 AM</p>

                    <div className="flex justify-end gap-2 mt-3">
                      <button className="bg-blue-500 text-white px-3 py-2 rounded-lg text-sm hover:bg-blue-600 transition">
                        Reschedule
                      </button>
                      <button className="bg-red-500 text-white px-3 py-2 rounded-lg text-sm hover:bg-red-600 transition">
                        Delete
                      </button>
                    </div>
                  </div>

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
