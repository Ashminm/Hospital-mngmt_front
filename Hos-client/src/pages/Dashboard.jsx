import React, { useState } from "react";
import {Col,Nav,Row,Tab} from "react-bootstrap";
import NavH from "../pages/Nav"
import HomeDash from "../components/HomeDash";
import Appoiments from "../components/Appoiments";
import Staff from "../components/Staff";
import Rooms from "../components/Rooms";
import Petients from "../components/Petients";
import Doctor from "../components/Doctor";
import Configuration from "../components/Configuration";

function Dashboard() {
  const role = sessionStorage.getItem("role") || "patient";

  const allTabs = {
    admin: [
      { key: "1", label: "Dashboard", icon: "dashboard" },
      { key: "2", label: "Doctors", icon: "medical_services" },
      { key: "3", label: "Appointments", icon: "event_available" },
      { key: "4", label: "Patients", icon: "groups" },
      { key: "5", label: "Staff", icon: "badge" },
      { key: "6", label: "Rooms", icon: "meeting_room" },
      { key: "7", label: "Configuration", icon: "settings" },
    ],
    doctor: [
      { key: "3", label: "Appointments", icon: "event_available" },
      { key: "4", label: "Patients", icon: "groups" },
    ],
    reception: [
      { key: "2", label: "Doctors", icon: "medical_services" },
      { key: "4", label: "Patients", icon: "groups" },
      { key: "6", label: "Rooms", icon: "meeting_room" },
    ],
    patient: [
      { key: "7", label: "Configuration", icon: "settings" },
    ],
  };


  const bottomTabs = {
    admin: [
      { key: "8", label: "Logout", icon: "logout" },
      { key: "9", label: "Feedback", icon: "feedback" },
    ],
    doctor: [
      { key: "8", label: "Logout", icon: "logout" },
    ],
    reception: [
      { key: "8", label: "Logout", icon: "logout" },
    ],
    patient: [
      { key: "8", label: "Logout", icon: "logout" },
      { key: "9", label: "Feedback", icon: "feedback" },
    ],
  };

  const topTabs = allTabs[role] || [];
  const bottom = bottomTabs[role] || [];
  
  const defaultKey =
  topTabs.length > 0
    ? topTabs[0].key
    : bottom.length > 0
    ? bottom[0].key
    : "1";

  const [activeKey, setActiveKey] = useState(defaultKey);

  return (
    <>
      <div className="p-4">
      {/*  bg-gray- */}
        <NavH />
        <Tab.Container activeKey={activeKey} onSelect={(k) => setActiveKey(k)}>
          <Row className="flex-nowrap">
            <Col xs="auto" className="d-flex flex-column border-r border-slate-300 py-4  h-screen" >
              <Nav
                variant="pills"
                className="flex-column justify-between flex-grow-1"
              >
                <div>
                  {topTabs.map((item) => (
                    <Nav.Item key={item.key} className="mb-3">
                      <Nav.Link
                        eventKey={item.key}
                        style={{
                          backgroundColor:
                            activeKey === item.key ? "#cfd1d0" : "transparent",
                          color: "black",
                          display: "flex",
                          alignItems: "center",
                          gap: "9px",
                          fontWeight: "500",
                        }}
                      >
                        <span className="material-symbols-outlined">
                          {item.icon}
                        </span>
                        <span className="hidden lg:inline">{item.label}</span>
                      </Nav.Link>
                    </Nav.Item>
                  ))}
                </div>

                <div >
                  {bottom.map((item) => (
                    <Nav.Item key={item.key} className="mb-3">
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
                        <span className="hidden lg:inline">{item.label}</span>
                      </Nav.Link>
                    </Nav.Item>
                  ))}
                </div>
              </Nav>
            </Col>

            <Col  className="flex-grow-1">
              <Tab.Content>
                <Tab.Pane eventKey="1"><HomeDash/></Tab.Pane>
                <Tab.Pane eventKey="2"><Doctor/></Tab.Pane>
                <Tab.Pane eventKey="3"><Appoiments/></Tab.Pane>
                <Tab.Pane eventKey="4"><Petients/></Tab.Pane>
                <Tab.Pane eventKey="5"><Staff/></Tab.Pane>
                <Tab.Pane eventKey="6"><Rooms/></Tab.Pane>
                <Tab.Pane eventKey="7"><Configuration/></Tab.Pane>
                <Tab.Pane eventKey="8"> <button className="btn btn-primary">logout</button> </Tab.Pane>
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
