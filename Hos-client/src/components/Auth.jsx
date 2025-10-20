import React, { useState } from 'react'
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom"
import { loginApi } from '../services/CommenApi';

function Auth() {

  const [userData, setUserData] = useState({
    username: "",
    password: "",
    role: ""
  })
  console.log(userData);

  const HandleLogin = async (e) => {
    e.preventDefault();
    sessionStorage.setItem("role",userData.role)
    navigate('/dashboard', { replace: true })
    // if(!userData.username || !userData.password){
    //  return alert("Fill all details");
    // } else {
    //   const res= await loginApi(userData)
    //   if(res.status === 200){
    //     alert("success")
    //     sessionStorage.setItem("role",userData.role)
    //     console.log("Login");
    //     navigate('/dashboard', { replace: true })
    //   }else{
    //     alert("Login faild")
    //   }
    // }

  }

  const navigate = useNavigate();


  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 via-blue-900 to-blue-400">
      <Container>
        <Row className="items-center">
          <Col
            md={6}
            className="text-center md:text-left flex flex-col justify-center"
          >
            <h1 className="mt-5 mb-4 text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight px-3 text-blue-300">
              <i className="fa-solid fa-stethoscope text-slate-200"></i> Care
            </h1>
            <h1 className="mb-5 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight px-3 text-blue-100">
              The best Medical <br />
              <span className="text-blue-300">for your Body</span>
            </h1>

            <p className="px-3 text-blue-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
              itaque accusantium odio, soluta, corrupti aliquam quibusdam tempora
              at cupiditate quis eum maiores libero veritatis? Dicta facilis sint
              aliquid ipsum atque?
            </p>
          </Col>

          <Col md={6} className="flex justify-center items-center">
            <Card
              className="w-full max-w-md shadow-xl bg-transparent backdrop-blur-xs"
            >
              <Card
                className="bg-transparent backdrop-blur-xs"
              >
                <Card.Body className="p-5">
                  <h3 className="text-center mb-4 font-bold text-white">
                    Login
                  </h3>

                  <Form>
                    <Form.Group className="mb-4 text-left">
                      <Form.Label className="font-semibold  text-white">Username</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter username"
                        className="rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                        onChange={(e) => { setUserData({ ...userData, username: e.target.value }) }}
                        value={userData.username}
                      />
                    </Form.Group>

                    <Form.Group className="mb-4 text-left">
                      <Form.Label className="font-semibold  text-white">Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Enter password"
                        autoComplete="new-password"
                        className="rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                        onChange={(e) => { setUserData({ ...userData, password: e.target.value }) }}
                        value={userData.password}
                      />
                    </Form.Group>

                    <Form.Group className="mb-4 flex items-center justify-between flex-wrap gap-3 space-x-4" onChange={(e) => { setUserData({ ...userData, role: e.target.value }) }}
                      value={userData.role}>
                      <Form.Check className='m-0'
                        type="radio"
                        id="doctor"
                        name="role"
                        value="doctor"
                        label={<span className="text-white">Doctor</span>}
                      />
                      <Form.Check className='m-0'
                        type="radio"
                        id="reception"
                        name="role"
                        value="reception"
                        label={<span className="text-white">Reception</span>}
                      />
                      <Form.Check className='m-0'
                        type="radio"
                        id="admin"
                        name="role"
                        value="admin"
                        label={<span className="text-white">Admin</span>}
                      />
                      {/* <Form.Check className='m-0'
                        type="radio"
                        id="patient"
                        name="role"
                        value="patient"
                        label={<span className="text-white">Patient</span>}
                      /> */}
                    </Form.Group>


                    <Button
                      onClick={HandleLogin}
                      variant="primary"
                      type="submit"
                      className="w-full py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-200"
                    >
                      Login
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Auth;
