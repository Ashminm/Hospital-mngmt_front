import React from 'react'
import { Tab, Nav } from "react-bootstrap";
import { Form } from 'react-bootstrap';

function Appoiments() {

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
                eventKey="reschedule"
                className="!border-none !bg-transparent !px-2 !py-1 !text-gray-600 hover:!text-blue-600"
              >
                Reschedule Appointment
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


          <div className="mt-3 w-96">
            <Tab.Content>
              <Tab.Pane eventKey="book">
                <Form className="p-3">
                  <Form.Group className="mb-3" controlId="departmentSelect">
                    <Form.Label>Select Department</Form.Label>
                    <Form.Select>
                      <option>Select Department</option>
                      <option>Cardiology</option>
                      <option>Neurology</option>
                      <option>Orthopedics</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="doctorSelect">
                    <Form.Label>Select Doctor</Form.Label>
                    <Form.Select>
                      <option>Select Doctor</option>
                      <option>Dr. John</option>
                      <option>Dr. Sarah</option>
                      <option>Dr. Alex</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="appointmentDate">
                    <Form.Label>Date</Form.Label>
                    <Form.Control type="date" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="appointmentTime">
                    <Form.Label>Time</Form.Label>
                    <Form.Control type="time" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="appointmentReason">
                    <Form.Label>Reason for Appointment</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Enter reason" />
                  </Form.Group>
                  <button className='btn btn-primary' type="submit">
                    Reschedule Appointment
                  </button>
                </Form>
              </Tab.Pane>

              <Tab.Pane eventKey="reschedule">
                <Form className="p-3">
                  <Form.Group className="mb-3" controlId="departmentSelect">
                    <Form.Label>Select Department</Form.Label>
                    <Form.Select>
                      <option>Select Department</option>
                      <option>Cardiology</option>
                      <option>Neurology</option>
                      <option>Orthopedics</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="doctorSelect">
                    <Form.Label>Select Doctor</Form.Label>
                    <Form.Select>
                      <option>Select Doctor</option>
                      <option>Dr. John</option>
                      <option>Dr. Sarah</option>
                      <option>Dr. Alex</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="appointmentDate">
                    <Form.Label>Date</Form.Label>
                    <Form.Control type="date" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="appointmentTime">
                    <Form.Label>Time</Form.Label>
                    <Form.Control type="time" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="appointmentReason">
                    <Form.Label>Reason for Appointment</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Enter reason" />
                  </Form.Group>
                  <button className='btn btn-primary' type="submit">
                    Reschedule Appointment
                  </button>
                </Form>
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

export default Appoiments
