import React from 'react'
import { Tab, Nav, Form, Button } from "react-bootstrap";
import Table from 'react-bootstrap/Table';

function Configuration() {
  return (
    <>
      <div className="mx-auto p-4">
        <h3 className="text-xl font-semibold">Configurations</h3>
        {/* <p className="text-gray-500 mb-4">Manage your appointments</p> */}

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
                System
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="reschedule"
                className="!border-none !bg-transparent !px-2 !py-1 !text-gray-600 hover:!text-blue-600"
              >
                Departments
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="view"
                className="!border-none !bg-transparent !px-2 !py-1 !text-gray-600 hover:!text-blue-600"
              >
                Services
              </Nav.Link>
            </Nav.Item>
          </Nav>

          <div className="mt-3">
            <Tab.Content>
              <Tab.Pane eventKey="book">
                <h4 className="fw-semibold mb-3">General Settings</h4>
                <Form className="mb-4 w-96">
                  <Form.Group className="mb-3" controlId="systemName">
                    <Form.Label>System Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter system name" />
                  </Form.Group>


                  <Form.Group className="mb-3" controlId="systemEmail">
                    <Form.Label>System Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter system email" />
                  </Form.Group>


                  <Form.Group className="mb-3" controlId="systemPhone">
                    <Form.Label>System Phone</Form.Label>
                    <Form.Control type="number" placeholder="Enter phone number" />
                  </Form.Group>

                  <hr />

                  <h5 className="fw-semibold mb-3">Security Settings</h5>


                  <Form.Group className="mb-3" controlId="passwordPolicy">
                    <Form.Label>Password Policy</Form.Label>
                    <Form.Control type="password" placeholder="Enter password policy" />
                  </Form.Group>


                  <Form.Group className="mb-3" controlId="sessionTimeout">
                    <Form.Label>Session Timeout (minutes)</Form.Label>
                    <Form.Control type="text" placeholder="e.g. 30" />
                  </Form.Group>

                  <Button variant="primary" type="submit">
                    Save Settings
                  </Button>
                </Form>


                <div>
                  <h5 className="fw-semibold mb-3">Role Permission</h5>
                  <div className="border rounded overflow-hidden">
                    <Table hover responsive className="mb-0">
                      <thead>
                        <tr>
                          <th>Role</th>
                          <th>Dashboard</th>
                          <th>Patients</th>
                          <th>Appointments</th>
                          <th>Staff</th>
                          <th>Configuration</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Admin</td>
                          <td>Yes</td>
                          <td>Yes</td>
                          <td>Yes</td>
                          <td>Yes</td>
                          <td>Yes</td>
                        </tr>
                        <tr>
                          <td>Doctor</td>
                          <td>Yes</td>
                          <td>Yes</td>
                          <td>Yes</td>
                          <td>No</td>
                          <td>No</td>
                        </tr>
                        <tr>
                          <td>Staff</td>
                          <td>No</td>
                          <td>Yes</td>
                          <td>Yes</td>
                          <td>Yes</td>
                          <td>No</td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </div>
              </Tab.Pane>

              <Tab.Pane eventKey="reschedule">
                <h4 className='font-semibold'>Gen</h4>

              </Tab.Pane>

              <Tab.Pane eventKey="view">
                View appoiment
              </Tab.Pane>
            </Tab.Content>
            <div className="flex justify-end items-center mt-3">
              <button className='btn btn-primary'>Save changes</button>
            </div>
          </div>
        </Tab.Container>
      </div>
    </>
  )
}

export default Configuration
