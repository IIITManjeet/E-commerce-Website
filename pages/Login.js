import React, { useState } from 'react'
import { Button, Col, Container, Form, FormGroup, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Login() {
 const [email,setEmail]=useState('');
 const [password, setPassword] = useState('');
 function handleSubmit(){

 }
 return (
  <Container>
   <Row>
    <Col md={6} className="login__form--container pt-3 text-center">
     <Form style={{ width: '100%' }} >
      <h1>Login to your account</h1>
      <FormGroup>
       <Form.Label>Email Address</Form.Label>
       <Form.Control type="email" placeholder='Enter Email' value={email} required onChange={(e)=>setEmail(e.target.value)}/>
      </FormGroup>
      <FormGroup>
       <Form.Label>Password</Form.Label>
       <Form.Control type="password" placeholder='Enter Password' value={password} required onChange={(e) => setPassword(e.target.value)} />
      </FormGroup>
      <FormGroup>
       <Button type="Submit">Login</Button>
      </FormGroup>
      <p>Don't have an account?<Link to="/signup">Create Account</Link></p>
     </Form>
    </Col>
    <Col md={6} className="login__image--container"></Col>
   </Row>
  </Container>
 )
}

export default Login