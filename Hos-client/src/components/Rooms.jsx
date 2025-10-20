import React, { useState, useEffect } from 'react'
import { Form, Table } from 'react-bootstrap';
import Select from "react-select";
import { allRooms } from '../services/CommenApi';

function Rooms() {
  const [Optype, setOpType] = useState("");
  const [token, setToken] = useState("");
  const [AllRoom, setAllRoom] = useState([]);

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setToken(sessionStorage.getItem("token"))
    }
  }, [])

  useEffect(() => {
    if (token) {
      getAllRooms()
    }
  }, [token]);

  const getAllRooms = async () => {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    try {
      const res = await allRooms(headers);
      if (res.status === 200) {
        setAllRoom(res.data)
      } else {
        console.log("Failed to fetch doc:", res);
      }
    } catch (err) {
      console.log("Error fetching doc:", err);
    }
  };

  const Deoptions = [
    { value: "cardiology", label: "Cardiology" },
    { value: "neurology", label: "Neurology" },
    { value: "orthopedics", label: "Orthopedics" },
    { value: "pediatrics", label: "Pediatrics" },
    { value: "radiology", label: "Radiology" },
  ];
  const Paoptions = [
    { value: "Alex", label: "Alex" },
    { value: "Dr.Liya", label: "Liya" },
    { value: "Rosh", label: "Rosh" },
    { value: "Mim", label: "Mim" },
    { value: "Rosh", label: "Rosh" },
  ];

  const styles = {
    control: (base) => ({ ...base, width: "20rem" }),
    menu: (base) => ({ ...base, width: "20rem" }),
  };
  return (
    <>
      <div className="h-screen p-4 overflow-auto">
        <div className='mx-auto'>
          <h3 className="text-xl font-semibold">Room Management</h3>
          <p className='text-gray-400'>Manage staff types, availability, and patient assignment.</p>
        </div>
        <hr />

        <div className='w-80'>
          <h5 className='pb-2 text-xl font-semibold'>Room</h5>
          <Form>
            <div className="mb-3">
              <div className="mb-3">
                <Form.Label>Select type</Form.Label>
                <Form.Select
                  aria-label="Select type"
                  value={Optype}
                  onChange={(e) => setOpType(e.target.value)}
                >
                  <option value="">Select Type</option>
                  <option value="createroom">Create Room</option>
                  <option value="assignroom">Assign Room</option>
                </Form.Select>
              </div>
              <hr />
              {Optype === "createroom" && (
                <>
                  <Form.Group className="mb-3">
                    <Form.Label>Room number</Form.Label>
                    <Form.Control type="text" placeholder="Room number" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Room type</Form.Label>
                    <Form.Control type="text" placeholder="Room type" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Room flour</Form.Label>
                    <Form.Control type="text" placeholder="Room flour" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Room capacity</Form.Label>
                    <Form.Control type="text" placeholder="Room capacity" />
                  </Form.Group>
                  <Form.Label>Status</Form.Label>
                  <Form.Select aria-label="Default select example" className='mb-3'>
                    <option>Select status</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                  <button
                    className='btn btn-primary'
                  >
                    Create
                  </button>
                </>
              )}
              {Optype === "assignroom" && (
                <>
                  <label>Patient</label>
                  <Select
                    options={Paoptions}
                    placeholder="Select Patient"
                    isSearchable
                    styles={styles}
                    className='mb-3'
                  />
                  <label>Department</label>
                  <Select
                    options={Deoptions}
                    placeholder="Select Department"
                    isSearchable
                    styles={styles}
                    className='mb-3'

                  />

                  <Form.Label>Type</Form.Label>
                  <Form.Select aria-label="Default select example" className='mb-3' >
                    <option>Select type</option>
                    <option value="Admitte">Admitte</option>
                    <option value="Discharge">Discharge</option>
                  </Form.Select>

                  <Form.Label>Status</Form.Label>
                  <Form.Select aria-label="Default select example" className='mb-3' >
                    <option>Select status</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                  </Form.Select>
                  <button
                    className='btn btn-primary'
                  >
                    Create
                  </button>
                </>
              )}
            </div>
          </Form>
        </div>

        <div className="flex justify-between flex-col gap-4">

          <div>
            <h5 className='text-xl font-semibold'>Room Availability</h5>
            <div className="border rounded-md overflow-hidden shadow-md">
              <Table hover responsive className='mb-0'>
                <thead>
                  <tr>
                    <th>Index</th>
                    <th>ID</th>
                    <th>Room Number</th>
                    <th>Floor</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {AllRoom.map((Roo, index) => (
                    <tr  key={index} className="border-t">
                      <td>{index}</td>
                      <td>{Roo.room_id}</td>
                      <td>{Roo.room_number}</td>
                      <td>{Roo.floor}</td>
                      <td>
                            <span
                              className={`p-1 px-3 rounded-md text-sm ${Roo.status === "Active"
                                  ? "bg-green-200 text-green-700"
                                  : "bg-slate-200 text-gray-600"
                                }`}
                            >
                              {Roo.status}
                            </span>
                          </td>
                      <td><button className='btn btn-danger'>Delete</button></td>

                    </tr>
                  ))}


                </tbody>
              </Table>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Rooms
