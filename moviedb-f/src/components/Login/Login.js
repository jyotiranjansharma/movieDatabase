import React from 'react';
import { useState } from 'react';
import { Form, Col, Row, Button, InputGroup, Container, Alert } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

const Login =() => {
    const history = useHistory()
    const [validated, setValidated] = useState(false);
    const [msg, setMsg] = useState()
    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const handleChange = (event) => {
        let controlName = event.target.name
        let controlValue = event.target.value
        setUser({
            ...user,
            [controlName]: controlValue
        })
    }

    const login = (user) => {
        axios.post(`http://localhost:5000/api/v1/users/login`, user)
        .then((res) => {
            if(res.data.status === 404) {
                setMsg(res.data.message);
            } else {
                setMsg(res.data.message);
                localStorage.setItem('myloginData', JSON.stringify(res.data));
                history.push({
                    pathname: '/home',
                });
            }
        })
    }
  
    const handleSubmit = (event) => {
        event.preventDefault();
        if(user.email !== '' && user.password !== '') {
            login(user);
        }
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
            <div id="loginPage" style={useStylePage}>
                <Container>
                    <Row className="justify-content-center align-items-center">
                        <div style={useStyleBox}>
                            <h2 className="text-center" style={useStyleHeading}>Login</h2>
                            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                <Row className="mb-3">
                                    <Form.Group as={Col} md="12" controlId="validationCustomUsername">
                                        <Form.Label>Email</Form.Label>
                                        <InputGroup hasValidation>
                                        <Form.Control
                                            type="text"
                                            placeholder="Email"
                                            aria-describedby="inputGroupPrepend"
                                            required
                                            name="email"
                                            value={user.email}
                                            onChange={handleChange}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Please enter a email.
                                        </Form.Control.Feedback>
                                        </InputGroup>
                                    </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                    <Form.Group as={Col} md="12" controlId="validationCustomPassword">
                                        <Form.Label>Password</Form.Label>
                                        <InputGroup hasValidation>
                                        <Form.Control
                                            type="password"
                                            placeholder="Password"
                                            aria-describedby="inputGroupPrepend"
                                            required
                                            name="password"
                                            value={user.password}
                                            onChange={handleChange}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Please enter a password.
                                        </Form.Control.Feedback>
                                        </InputGroup>
                                    </Form.Group>
                                </Row>
                                <div className="d-flex justify-content-between">
                                    <Link to="/home" className="text-dark">Skip for now</Link>
                                    <Button type="submit" className="btn-dark text-light">Login</Button>
                                    <Link to="/register" className="text-dark float-right">Register here</Link>
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
  
  export default Login;