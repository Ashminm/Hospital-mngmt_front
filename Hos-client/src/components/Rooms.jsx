import React from 'react'
import { Form } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

function Rooms() {
  return (
    <>
      <div className="h-screen overflow-auto">
        <div className='mx-auto p-4'>
          <h3 className="text-xl font-semibold">Room Management</h3>
          <p className='text-gray-400'>Manage staff types, availability, and patient assignment.</p>
        </div>
        <div className="container flex justify-between flex-col gap-4">
          <div>
            <h5 className='text-xl font-semibold'>Room Types</h5>
            <div className="border rounded-md overflow-hidden">
              <Table hover responsive className='mb-0'>
                <thead>
                  <tr>
                    <th>Room Type</th>
                    <th>Description</th>
                    <th>Capacity</th>
                    <th>Availability</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>Otto</td>
                    <td>20</td>
                  </tr>
                  <tr>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>Thornton</td>
                    <td>20</td>

                  </tr>
                  <tr>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>Thornton</td>
                    <td>20</td>

                  </tr>
                  <tr>
                    <td>Jacob</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>20</td>

                  </tr>
                  <tr>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td>20</td>

                  </tr>
                  <tr>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td>20</td>

                  </tr>
                  <tr>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td>20</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
          <div>
            <h5 className='text-xl font-semibold'>Room Availability</h5>
            <div className="border rounded-md overflow-hidden">
              <Table hover responsive className='mb-0'>
                <thead>
                  <tr>
                    <th>Room Number</th>
                    <th>Type</th>
                    <th>Status</th>
                    <th>Patient</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>101</td>
                    <td><span className='bg-slate-200 p-1 px-3 rounded-md text-gray-600 text-sm'>ICU</span></td>
                    <td><span className='bg-slate-200 p-1 px-3 rounded-md text-gray-600 text-sm'>Completed</span></td>
                    <td>Otto</td>
                  </tr>
                  <tr>
                    <td>101</td>
                    <td><span className='bg-slate-200 p-1 px-3 rounded-md text-gray-600 text-sm'>ICU</span></td>
                    <td><span className='bg-slate-200 p-1 px-3 rounded-md text-gray-600 text-sm'>Completed</span></td>
                    <td>Thornton</td>

                  </tr>
                  <tr>
                    <td>101</td>
                    <td><span className='bg-slate-200 p-1 px-3 rounded-md text-gray-600 text-sm'>ICU</span></td>
                    <td><span className='bg-slate-200 p-1 px-3 rounded-md text-gray-600 text-sm'>Completed</span></td>
                    <td>Thornton</td>

                  </tr>
                  <tr>
                    <td>101</td>
                    <td><span className='bg-slate-200 p-1 px-3 rounded-md text-gray-600 text-sm'>ICU</span></td>
                    <td><span className='bg-slate-200 p-1 px-3 rounded-md text-gray-600 text-sm'>Completed</span></td>
                    <td>Thornton</td>

                  </tr>
                  <tr>
                    <td>101</td>
                    <td><span className='bg-slate-200 p-1 px-3 rounded-md text-gray-600 text-sm'>ICU</span></td>
                    <td><span className='bg-slate-200 p-1 px-3 rounded-md text-gray-600 text-sm'>Completed</span></td>
                    <td>Alex</td>

                  </tr>
                  <tr>
                    <td>101</td>
                    <td><span className='bg-slate-200 p-1 px-3 rounded-md text-gray-600 text-sm'>ICU</span></td>
                    <td><span className='bg-slate-200 p-1 px-3 rounded-md text-gray-600 text-sm'>Completed</span></td>
                    <td>Alex</td>

                  </tr>
                  <tr>
                    <td>J01</td>
                    <td><span className='bg-slate-200 p-1 px-3 rounded-md text-gray-600 text-sm'>ICU</span></td>
                    <td><span className='bg-slate-200 p-1 px-3 rounded-md text-gray-600 text-sm'>Completed</span></td>
                    <td>Alex</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
          <div className='w-80'>
            <h5 className='pb-2 text-xl font-semibold'>Assign Room</h5>
            <Form>
              <div className="mb-3">
                <Form.Label>Patient</Form.Label>
                <Form.Select aria-label="Default select example">
                  <option>Select Patient</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </div>
              <div className="mb-3">
                <Form.Label>Room Number</Form.Label>
                <Form.Select aria-label="Default select example">
                  <option>Select Room</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </div>
            </Form>
          </div>
          <div className="flex justify-end mt-3">
            <button className='btn btn-primary'>Assign</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Rooms
