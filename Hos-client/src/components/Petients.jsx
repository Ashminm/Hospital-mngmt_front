import React,{ useEffect, useState } from 'react'
import { Tab, Nav } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import { allPatients } from '../services/CommenApi';

function Petients() {
  const [token, setToken] = useState("");
  const [AllPati, setAllPati] = useState([]);

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setToken(sessionStorage.getItem("token"))
    }
  }, [])

  useEffect(() => {
    if (token) {
      getAllPatients()
    }
  }, [token]);

  const getAllPatients = async () => {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    try {
      const res = await allPatients(headers);
      if (res.status === 200) {
        setAllPati(res.data)
      } else {
        console.log("Failed to fetch doc:", res);
      }
    } catch (err) {
      console.log("Error fetching doc:", err);
    }
  };

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
           
          </Nav>


          <div className="mt-3">
            <Tab.Content>
              <Tab.Pane eventKey="book">
                <div className="border rounded-md overflow-hidden shadow-md">
                  <Table hover responsive className='mb-0'>
                    <thead>
                      <tr>
                        {/* <th className="px-4 py-2 font-semibold">Index</th> */}
                        <th className="px-4 py-2 font-semibold">ID</th>
                        <th className="px-4 py-2 font-semibold">Name</th>
                        <th className="px-4 py-2 font-semibold">DOB</th>
                        <th className="px-4 py-2 font-semibold">email</th>
                        <th className="px-4 py-2 font-semibold">phone</th>
                        <th className="px-4 py-2 font-semibold">address</th>
                        <th className="px-4 py-2 font-semibold">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                    {AllPati.map((pat,index) => (
                        <tr key={index} className="border-t">
                          {/* <td className="px-4 py-2">{index}</td> */}
                          <td className="px-4 py-2">{pat.id}</td>
                          <td className="px-4 py-2">{pat.firstName} {pat.lastName}</td>
                          <td className="px-4 py-2">{pat.dateOfBirth}</td>
                          <td className="px-4 py-2">{pat.email}</td>
                          <td className="px-4 py-2">{pat.phoneNo}</td>
                          <td className="px-4 py-2">{pat.address}</td>
              
                          <td className="px-4 py-2"><button className='btn btn-danger'>Delete</button></td>
                      
                        </tr>
                      ))}

                      
                    </tbody>
                  </Table>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="reschedule">
                <div className="border rounded-md overflow-hidden shadow-md">
                  <Table hover responsive className='mb-0'>
                    <thead>
                      <tr>
                        {/* <th className="px-4 py-2 font-semibold">Index</th> */}
                        <th className="px-4 py-2 font-semibold">ID</th>
                        <th className="px-4 py-2 font-semibold">Name</th>
                        <th className="px-4 py-2 font-semibold">DOB</th>
                        <th className="px-4 py-2 font-semibold">email</th>
                        <th className="px-4 py-2 font-semibold">phone</th>
                        <th className="px-4 py-2 font-semibold">address</th>
                        <th className="px-4 py-2 font-semibold">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                    {AllPati.map((pat,index) => (
                        <tr key={index} className="border-t">
                          {/* <td className="px-4 py-2">{index}</td> */}
                          <td className="px-4 py-2">{pat.id}</td>
                          <td className="px-4 py-2">{pat.firstName} {pat.lastName}</td>
                          <td className="px-4 py-2">{pat.dateOfBirth}</td>
                          <td className="px-4 py-2">{pat.email}</td>
                          <td className="px-4 py-2">{pat.phoneNo}</td>
                          <td className="px-4 py-2">{pat.address}</td>
              
                          <td className="px-4 py-2"><button className='btn btn-danger'>Delete</button></td>
                      
                        </tr>
                      ))}

                      
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
