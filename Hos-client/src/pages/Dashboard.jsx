import React, { useState } from "react";
import { Col, Nav, Row, Tab } from "react-bootstrap";
import NavH from "../pages/Nav";
import HomeDash from "../components/HomeDash";
import Appoiments from "../components/Appoiments";
import Staff from "../components/Staff";
import Rooms from "../components/Rooms";
import Petients from "../components/Petients";
import Doctor from "../components/Doctor";
import Configuration from "../components/Configuration";
import Logout from "../components/Logout";

function Dashboard() {
  const role = sessionStorage.getItem("role") || "patient";

  const allTabs = {
    manager: [
      { key: "1", label: "Dashboard", icon: "dashboard" },
      { key: "2", label: "Doctors", icon: "medical_services" },
      { key: "3", label: "Appointments", icon: "event_available" },
      { key: "4", label: "Patients", icon: "groups" },
      { key: "5", label: "Staff", icon: "badge" },
      { key: "6", label: "Rooms", icon: "meeting_room" },
      { key: "8", label: "Logout", icon: "logout" },
    ],
    admin: [
      { key: "3", label: "Appointments", icon: "event_available" },
      { key: "4", label: "Patients", icon: "groups" },
      { key: "6", label: "Rooms", icon: "meeting_room" },
      { key: "8", label: "Logout", icon: "logout" },

    ],
    doctor: [
      { key: "3", label: "Appointments", icon: "event_available" },
      { key: "4", label: "Patients", icon: "groups" },
      { key: "8", label: "Logout", icon: "logout" },

    ],
    reception: [
      { key: "2", label: "Doctors", icon: "medical_services" },
      { key: "4", label: "Patients", icon: "groups" },
      { key: "6", label: "Rooms", icon: "meeting_room" },
      { key: "8", label: "Logout", icon: "logout" },

    ],
  };

  const topTabs = allTabs[role] || [];

  const defaultKey = topTabs.length > 0 ? topTabs[0].key : "1";
  const [activeKey, setActiveKey] = useState(defaultKey);

  return (
    <div className="p-4">
      <NavH />
      <Tab.Container activeKey={activeKey} onSelect={(k) => setActiveKey(k)}>
        <Row className="flex-nowrap">
          <Col
            xs="auto"
            className="d-flex flex-column border-r border-slate-300 py-4 h-screen"
          >
            <Nav variant="pills" className="flex-column justify-between flex-grow-1">
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
                      <span className="material-symbols-outlined">{item.icon}</span>
                      <span className="hidden lg:inline">{item.label}</span>
                    </Nav.Link>
                  </Nav.Item>
                ))}
              </div>
            </Nav>
          </Col>

          <Col className="flex-grow-1">
            <Tab.Content>
              <Tab.Pane eventKey="1"><HomeDash /></Tab.Pane>
              <Tab.Pane eventKey="2"><Doctor /></Tab.Pane>
              <Tab.Pane eventKey="3"><Appoiments /></Tab.Pane>
              <Tab.Pane eventKey="4"><Petients /></Tab.Pane>
              <Tab.Pane eventKey="5"><Staff /></Tab.Pane>
              <Tab.Pane eventKey="6"><Rooms /></Tab.Pane>
              <Tab.Pane eventKey="7"><Configuration /></Tab.Pane>
              <Tab.Pane eventKey="8"><Logout /></Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
}

export default Dashboard;
 