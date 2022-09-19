import React, { useState } from 'react'
import { Button, Col, Container, Form, FormGroup, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './Signup.css';

function Signup() {
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
  return (
   <Container>
    <Row>
     <Col md={6} className="signup__form--container pt-3 text-center">
      <Form style={{ width: '100%' }} >
       <h1>Create an Account</h1>
       <FormGroup>
        <Form.Label>Email Address</Form.Label>
        <Form.Control type="email" placeholder='Enter Email' value={email} required onChange={(e) => setEmail(e.target.value)} />
       </FormGroup>
       <FormGroup className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder='Enter Password' value={password} required onChange={(e) => setPassword(e.target.value)} />
       </FormGroup>
       <FormGroup>
        <Button type="Submit">Create Account</Button>
       </FormGroup>
       <p className='pt-3 text-center'>Don't have an account?<Link to="/signup">Create Account</Link></p>
      </Form>
     </Col>
     <Col md={6} className="signup__image--container"></Col>
    </Row>
   </Container>
  )
}

export default Signup