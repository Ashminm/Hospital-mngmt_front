import React, { useEffect, useState } from 'react'
import { Tab, Nav, Table } from "react-bootstrap";
import Select from "react-select";
import { allDoc, postDoc } from '../services/CommenApi';
import toast from 'react-hot-toast';

function Doctor() {
  const [doc, setDoc] = useState([]);
  const [token, setToken] = useState("");
  const [docDetails, setDocDetails] = useState({
    department: "",
    doctor: "",
    date: "",
    time: "",
    reason: ""
  })
  console.log("Doc= ", docDetails);

  const options = [
    { value: "cardiology", label: "Cardiology" },
    { value: "neurology", label: "Neurology" },
    { value: "orthopedics", label: "Orthopedics" },
    { value: "pediatrics", label: "Pediatrics" },
    { value: "radiology", label: "Radiology" },
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
    if (token) {
      getAllDoc()
    }
    console.log(token);
  }, [token]);

  const getAllDoc = async () => {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    try {
      const res = await allDoc(headers);
      if (res.status === 200) {
        setDoc(res.data);
      } else {
        console.log("Failed to fetch doc:", res);
      }
    } catch (err) {
      console.log("Error fetching doc:", err);
    }
  };

  const handleDoc = async (e) => {
    e.preventDefault();
    // console.log("Prev=", docDetails);

    // if (!docDetails.department) {
    //   return toast.error("Please fill the details!");
    // } else {
    //   const res = await postDoc(docDetails)
    //   if (res.status === 200) {
    //     toast.success("Scheduled!")
    //     console.log("Succ= ", res);

    //   } else {
    //     toast.error("Scheduled Faild!")
    //     console.log(res);


    //   }
    // }
  }

  return (
    <>
      <div className="mx-auto p-4">
        <h3 className="text-xl font-semibold">Doctor Management</h3>
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
                Profile
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="reschedule"
                className="!border-none !bg-transparent !px-2 !py-1 !text-gray-600 hover:!text-blue-600"
              >
                Schedule
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="view"
                className="!border-none !bg-transparent !px-2 !py-1 !text-gray-600 hover:!text-blue-600"
              >
                Receptionist Assignments
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <div className="mt-3">
            <Tab.Content>
              <Tab.Pane eventKey="book">
                <div className="border rounded-md overflow-hidden shadow-md">
                  <Table hover responsive className='mb-0'>
                    <thead>
                      <tr>
                        <th>Doctor Name</th>
                        <th>Specialization</th>
                        <th>Contact</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Mark</td>
                        <td>Mark</td>
                        <td>Mark</td>

                        <td><span className='bg-slate-200 p-1 px-3 rounded-md text-gray-600 text-sm'>Completed</span></td>

                        <td>20</td>
                      </tr>
                      <tr>
                        <td>Jacob</td>
                        <td>Jacob</td>

                        <td>Thornton</td>
                        <td><span className='bg-slate-200 p-1 px-3 rounded-md text-gray-600 text-sm'>Completed</span></td>

                        <td>20</td>

                      </tr>
                      <tr>
                        <td>Jacob</td>
                        <td>Jacob</td>
                        <td>Jacob</td>

                        <td><span className='bg-slate-200 p-1 px-3 rounded-md text-gray-600 text-sm'>Completed</span></td>
                        <td>20</td>

                      </tr>
                      <tr>
                        <td>Jacob</td>
                        <td>Jacob</td>
                        <td>Jacob</td>

                        <td><span className='bg-slate-200 p-1 px-3 rounded-md text-gray-600 text-sm'>Completed</span></td>

                        <td>20</td>

                      </tr>
                      <tr>
                        <td>Jacob</td>
                        <td>Jacob</td>
                        <td>Jacob</td>

                        <td><span className='bg-slate-200 p-1 px-3 rounded-md text-gray-600 text-sm'>Completed</span></td>

                        <td>20</td>

                      </tr>
                      <tr>
                        <td>Jacob</td>
                        <td>Jacob</td>
                        <td>Jacob</td>

                        <td><span className='bg-slate-200 p-1 px-3 rounded-md text-gray-600 text-sm'>Completed</span></td>

                        <td>20</td>

                      </tr>
                      <tr>
                        <td>Jacob</td>
                        <td>Jacob</td>
                        <td>Jacob</td>

                        <td><span className='bg-slate-200 p-1 px-3 rounded-md text-gray-600 text-sm'>Completed</span></td>

                        <td>20</td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </Tab.Pane>

              <Tab.Pane eventKey="reschedule">
                <form className="space-y-3 flex flex-col">
                  <Select
                    options={options}
                    placeholder="Select Department"
                    isSearchable
                    styles={styles}
                    onChange={(opt) => setDocDetails({ ...docDetails, department: opt?.value || "" })}
                    value={options.find(o => o.value === docDetails.department) || null}
                  />
                  <select className="w-96 border rounded p-2" onChange={(e) => { setDocDetails({ ...docDetails, doctor: e.target.value }) }}
                    value={docDetails.doctor}>
                    <option>Select Doctor</option>
                  </select>
                  <input
                    type="date"
                    className="w-96 border rounded p-2"
                    onChange={(e) => { setDocDetails({ ...docDetails, date: e.target.value }) }}
                    value={docDetails.date}
                  />
                  <input
                    type="time"
                    className="w-96 border rounded p-2"
                    onChange={(e) => { setDocDetails({ ...docDetails, time: e.target.value }) }}
                    value={docDetails.time}
                  />
                  <textarea
                    className="w-96 border rounded p-2"
                    placeholder="Reason for Appointment"
                    onChange={(e) => { setDocDetails({ ...docDetails, reason: e.target.value }) }}
                    value={docDetails.reason}
                  />
                  <div className="">
                    <button onClick={handleDoc} className="bg-blue-600 text-white px-4 py-2 rounded">
                      Schedule
                    </button>
                  </div>
                </form>
              </Tab.Pane>

              <Tab.Pane eventKey="view">
                View appoiment
              </Tab.Pane>
            </Tab.Content>
          </div>
        </Tab.Container>
      </div>
    </>
  )
}

export default Doctor
