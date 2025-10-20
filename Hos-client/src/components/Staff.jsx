import React, { useState } from 'react'
import { Form, Table } from 'react-bootstrap';
import Select from "react-select";

function Staff() {
  const [role, setRole] = useState("");
  const options = [
    { value: "cardiology", label: "Cardiology" },
    { value: "neurology", label: "Neurology" },
    { value: "orthopedics", label: "Orthopedics" },
    { value: "pediatrics", label: "Pediatrics" },
    { value: "radiology", label: "Radiology" },
  ];

  const styles = {
    control: (base) => ({ ...base, width: "20rem" }),
    menu: (base) => ({ ...base, width: "20rem" }),
  };
  return (
    <>
      <div className="h-screen p-4 overflow-auto">
        <div className='mx-auto'>
          <h3 className='text-xl font-semibold'>Staff Management</h3>
          <p className='text-gray-400'>Manage staff accounts, rols, and permissions.</p>
        </div>
        <hr />
        <div className="flex justify-between flex-col gap-4">
          <div className='w-80'>
            <h5 className='pb-2 text-xl font-semibold'>Add New Module</h5>
            <Form>
              <div className="mb-3">
                <Form.Label>Role</Form.Label>
                <Form.Select
                  aria-label="Select role"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                >
                  <option value="">Select role</option>
                  <option value="manager">Manager</option>
                  <option value="admin">Admin</option>
                  <option value="doctor">Doctor</option>
                </Form.Select>
              </div>
              <hr />
              {role === "doctor" && (
                <>

                  <Form.Group className="mb-3">
                    <Form.Label>Department</Form.Label>
                    <Select
                      options={options}
                      placeholder="Select Department"
                      isSearchable
                      styles={styles}
                    />
                  </Form.Group>
                  <div className="flex gap-3 w-full">
                    <div >
                      <Form.Group className="mb-3">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter first name" />
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Enter username" />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter password" />
                      </Form.Group>
                    </div>
                    <div >


                      <Form.Group className="mb-3">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter last name" />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Qualification</Form.Label>
                        <Form.Control type="text" placeholder="Enter qualification" />
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Form.Label>Status</Form.Label>
                        <Form.Select>
                          <option>Select status</option>
                          <option value="active">Active</option>
                          <option value="inactive">Inactive</option>
                        </Form.Select>
                      </Form.Group>
                    </div>
                  </div>




                </>
              )}

              {(role === "manager" || role === "admin") && (
                <>
                  <Form.Group className="mb-3">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter full name" />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter username" />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter password" />
                  </Form.Group>


                </>
              )}
              <div className="mt-3">
                <button
                  className='btn btn-primary'
                  disabled={role === 0 || role === "" || role === "Select role"}
                >
                  Create {role}
                </button>
              </div>


            </Form>

          </div>
          <div>
            <h5 className='text-xl font-semibold'>Staff List</h5>
            <div className="border rounded-md overflow-hidden shadow-md">
              <Table hover responsive className='mb-0'>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Role</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>Otto</td>
                    <td><span className='bg-slate-200 p-1 px-3 rounded-md text-gray-600 text-sm'>Completed</span></td>
                  </tr>
                  <tr>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>Thornton</td>
                    <td><span className='bg-slate-200 p-1 px-3 rounded-md text-gray-600 text-sm'>Completed</span></td>

                  </tr>
                  <tr>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>Thornton</td>
                    <td><span className='bg-slate-200 p-1 px-3 rounded-md text-gray-600 text-sm'>Completed</span></td>

                  </tr>
                  <tr>
                    <td>Jacob</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td><span className='bg-slate-200 p-1 px-3 rounded-md text-gray-600 text-sm'>Completed</span></td>

                  </tr>
                  <tr>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td><span className='bg-slate-200 p-1 px-3 rounded-md text-gray-600 text-sm'>Completed</span></td>

                  </tr>
                  <tr>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td><span className='bg-slate-200 p-1 px-3 rounded-md text-gray-600 text-sm'>Completed</span></td>

                  </tr>
                  <tr>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td><span className='bg-slate-200 p-1 px-3 rounded-md text-gray-600 text-sm'>Completed</span></td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Staff
