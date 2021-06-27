import React, { useState } from 'react';
import { Form, Col, Row, Button, InputGroup, Container, Alert } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

const Register =() => {
    const history = useHistory()
    const [validated, setValidated] = useState(false);
    const [user, setUser] = useState({
        firstname: '',
        lastname: '',
        username: '',
        email: '',
        phone: '',
        password: ''
    });

    const [msg, setMsg] = useState()
    
    const register = (user) => {
        axios.post(`http://localhost:5000/api/v1/users/register`, user)
        .then((res) => {
            if(res.status) {
                if(res.data.status === 201) {
                    setMsg(res.data.message)
                    setTimeout(() => history.push({
                        pathname: '/login',
                    }), 3000)
                } else {
                    setMsg(res.data.message)
                }
            }
        })
        .catch((error) => {
            console.log(error);
        })
    }

    const handleChange = (event) => {
        let controlName = event.target.name;
        let controlValue = event.target.value;
        setUser({
            ...user,
            [controlName]: controlValue
        })
    }
  
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        if (form.checkValidity() === true) {
            register(user);
        }
        // event.stopPropagation();
        setValidated(true);
    };


    const useStylePage = {
        backgroundColor: '#212529',
        height: '100vh'
    }

    const useStyleBox = {
        border: '1px solid #fff',
        backgroundColor: '#fff',
        padding: 20,
        maxWidth: 800,
        borderRadius: 10,
        marginTop: 250
    }

    const useStyleHeading = {
        color: '#fff',
        background: '#212529',
        border: '1px solid',
        padding: 10
    }
  
    return (
        <React.Fragment>
            <div id="registerPage" style={useStylePage}>
                <Container>
                    <Row className="justify-content-center align-items-center">
                        <div style={useStyleBox}>
                            <h2 className="text-center" style={useStyleHeading}>Join Us</h2>
                            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                <Row className="mb-3">
                                <Form.Group as={Col} md="4" controlId="validationCustom01">
                                    <Form.Label>First name</Form.Label>
                                    <Form.Control
                                    name="firstname"
                                    required
                                    type="text"
                                    placeholder="First name"
                                    value={user.firstname}
                                    onChange={handleChange}
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="4" controlId="validationCustom02">
                                    <Form.Label>Last name</Form.Label>
                                    <Form.Control
                                    name="lastname"
                                    required
                                    type="text"
                                    placeholder="Last name"
                                    value={user.lastname}
                                    onChange={handleChange}
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                                    <Form.Label>Username</Form.Label>
                                    <InputGroup hasValidation>
                                    <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                    <Form.Control
                                        name="username"
                                        type="text"
                                        placeholder="Username"
                                        aria-describedby="inputGroupPrepend"
                                        required
                                        value={user.username}
                                        onChange={handleChange}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please choose a username.
                                    </Form.Control.Feedback>
                                    </InputGroup>
                                </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                <Form.Group as={Col} md="6" controlId="validationCustom03">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control 
                                        name="email"
                                        type="text" 
                                        placeholder="Email" 
                                        required 
                                        value={user.email}
                                        onChange={handleChange}
                                        />
                                    <Form.Control.Feedback type="invalid">
                                    Please provide a valid email.
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="3" controlId="validationCustom04">
                                    <Form.Label>Phone</Form.Label>
                                    <Form.Control 
                                        name="phone"
                                        type="text" 
                                        placeholder="Phone" 
                                        required 
                                        value={user.phone}
                                        onChange={handleChange}
                                        />
                                    <Form.Control.Feedback type="invalid">
                                    Please provide a valid phone number.
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="3" controlId="validationCustom05">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control 
                                        name="password"
                                        type="password" 
                                        placeholder="Password" 
                                        required 
                                        value={user.password}
                                        onChange={handleChange}
                                        />
                                    <Form.Control.Feedback type="invalid">
                                    Please provide a valid password.
                                    </Form.Control.Feedback>
                                </Form.Group>
                                </Row>
                                <Form.Group className="mb-3">
                                <Form.Check
                                    required
                                    label="Agree to terms and conditions"
                                    feedback="You must agree before submitting."
                                />
                                </Form.Group>
                                <div className="d-flex justify-content-between">
                                    <Link to="/home" className="text-dark">Skip for now</Link>
                                    <Button type="submit" className="btn-dark text-light">Register</Button>
                                    <Link to="/login" className="text-dark float-right">Back to login</Link>
                                </div>
                            </Form>
                            {msg ? <Alert variant="dark" id="err-message" className="mt-2">{msg}</Alert> : ''}
                        </div>
                        
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
  }
  
  export default Register;