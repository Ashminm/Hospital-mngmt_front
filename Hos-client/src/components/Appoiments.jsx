import React from 'react'
import { Tab, Row, Col, Nav } from "react-bootstrap";

function Appoiments() {
  
  return (
    <>
    <div>
      <h3>Dashboard</h3>
      <p className='text-gray-400'>Manage your Appoiments</p>
    </div>
    <div className="">
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={12}>
          <Nav variant="pills">
            <Nav.Item>
              <Nav.Link eventKey="first">Tab 1</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Tab 2</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={12}>
          <Tab.Content>
            <Tab.Pane eventKey="first">First tab content</Tab.Pane>
            <Tab.Pane eventKey="second">Second tab content</Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
    </div>
  </>
  )
}

export default Appoiments
