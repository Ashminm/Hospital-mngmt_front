import React from 'react'
import { Tab, Nav } from "react-bootstrap";
import Table from 'react-bootstrap/Table';

function Petients() {
  return (
    <>
      <div className="mx-auto p-4">
        <h3 className="text-xl font-semibold">Patiant Management</h3>
        <p className="text-gray-500 mb-4">Manage patient profiles, medical History and doctor assignments</p>

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
                Patient profile
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="reschedule"
                className="!border-none !bg-transparent !px-2 !py-1 !text-gray-600 hover:!text-blue-600"
              >
                Medical History
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="view"
                className="!border-none !bg-transparent !px-2 !py-1 !text-gray-600 hover:!text-blue-600"
              >
                Doctor Assignments
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
                        <th>Patient ID</th>
                        <th>Name</th>
                        <th>DOB</th>
                        <th>Gender</th>
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
                        <td>Mark</td>
                        <td>Otto</td>
                        <td><span className='bg-slate-200 p-1 px-3 rounded-md text-gray-600 text-sm'>Completed</span></td>

                        <td>20</td>
                      </tr>
                      <tr>
                        <td>Jacob</td>
                        <td>Jacob</td>
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
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td><span className='bg-slate-200 p-1 px-3 rounded-md text-gray-600 text-sm'>Completed</span></td>
                        <td>20</td>

                      </tr>
                      <tr>
                        <td>Jacob</td>
                        <td>Jacob</td>
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
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td><span className='bg-slate-200 p-1 px-3 rounded-md text-gray-600 text-sm'>Completed</span></td>

                        <td>20</td>

                      </tr>
                      <tr>
                        <td>Jacob</td>
                        <td>Jacob</td>
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
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td><span className='bg-slate-200 p-1 px-3 rounded-md text-gray-600 text-sm'>Completed</span></td>

                        <td>20</td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </Tab.Pane>

              <Tab.Pane eventKey="reschedule">
                <div className="border rounded-md overflow-hidden shadow-md">
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
              </Tab.Pane>

              <Tab.Pane eventKey="view">
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
              </Tab.Pane>
            </Tab.Content>
          </div>
        </Tab.Container>
      </div>
    </>
  )
}

export default Petients
