import React from 'react'
import { Form } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

function Staff() {
  return (
    <>
      <div className="h-screen p-4 overflow-auto">
        <div className='mx-auto'>
          <h3 className='text-xl font-semibold'>Staff Management</h3>
          <p className='text-gray-400'>Manage staff accounts, rols, and permissions.</p>
        </div>
        <div className="flex justify-between flex-col gap-4">
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
          <div className='w-80'>
            <h5 className='pb-2 text-xl font-semibold'>Add New Staff</h5>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" placeholder='Enter full name' />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder='Enter email address' />
              </Form.Group>
              <div className="mb-3">
                <Form.Label>Role</Form.Label>
                <Form.Select aria-label="Default select example">
                  <option>Select role</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </div>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder='Enter password' />
              </Form.Group>
            </Form>
          </div>
          <div className="flex justify-end mt-3">
            <button className='btn btn-primary'>Add Staff</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Staff
