import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import HomeDash from "../components/HomeDash";
import Appoiments from "../components/Appoiments";
import NavH from "../pages/Nav"
import Staff from "../components/Staff";
import Rooms from "../components/Rooms";
import Petients from "../components/Petients";
import Doctor from "../components/Doctor";
import Configuration from "../components/Configuration";

function Dashboard() {
  const [activeKey, setActiveKey] = useState("1");

  const topTabs = [
    { key: "1", label: "Dashboard", icon: "dashboard" },
    { key: "2", label: "Doctors", icon: "medical_services" },
    { key: "3", label: "Appointments", icon: "event_available" },
    { key: "4", label: "Patients", icon: "groups" },
    { key: "5", label: "Staff", icon: "badge" },
    { key: "6", label: "Rooms", icon: "meeting_room" },
    { key: "7", label: "Configuration", icon: "settings" },
  ];


  const bottomTabs = [
    { key: "8", label: "Logout", icon: "logout" },
    { key: "9", label: "Feedback", icon: "feedback" },
  ];

  return (
    <>
      <div className="p-4 bg-slate-50">
        <NavH />
        <Tab.Container activeKey={activeKey} onSelect={(k) => setActiveKey(k)}>
          <Row>
            <Col sm={2} className="d-flex flex-column" style={{ height: "89vh" }}>
              <Nav
                variant="pills"
                className="flex-column justify-between flex-grow-1"
              >
                <div>
                  {topTabs.map((item) => (
                    <Nav.Item key={item.key}>
                      <Nav.Link
                        eventKey={item.key}
                        style={{
                          backgroundColor:
                            activeKey === item.key ? "#cfd1d0" : "transparent",
                          color: "black",
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          fontWeight: "500",
                        }}
                      >
                        <span className="material-symbols-outlined">
                          {item.icon}
                        </span>
                        {item.label}
                      </Nav.Link>
                    </Nav.Item>
                  ))}
                </div>

                <div>
                  {bottomTabs.map((item) => (
                    <Nav.Item key={item.key}>
                      <Nav.Link
                        eventKey={item.key}
                        style={{
                          backgroundColor:
                            activeKey === item.key ? "#cfd1d0" : "transparent",
                          color: "black",
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          fontWeight: "500",
                        }}
                      >
                        <span className="material-symbols-outlined">
                          {item.icon}
                        </span>
                        {item.label}
                      </Nav.Link>
                    </Nav.Item>
                  ))}
                </div>
              </Nav>
            </Col>

            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="1">
                  <HomeDash />
                </Tab.Pane>
                <Tab.Pane eventKey="3"><Appoiments /></Tab.Pane>
                <Tab.Pane eventKey="4"> <Petients /> </Tab.Pane>
                <Tab.Pane eventKey="7"> <Configuration /> </Tab.Pane>
                <Tab.Pane eventKey="5"> <Staff /> </Tab.Pane>
                <Tab.Pane eventKey="2"> <Doctor /> </Tab.Pane>
                <Tab.Pane eventKey="6"> <Rooms /> </Tab.Pane>
                <Tab.Pane eventKey="8">Logout content</Tab.Pane>
                <Tab.Pane eventKey="9">Feedback content</Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    </>
  );
}

export default Dashboard;
