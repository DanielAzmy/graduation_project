
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "./Login.css"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, password } = formData;

  const handleChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      // Basic form validation
      if (!name || !email || !password) {
        setErrorMessage('Please fill in all fields');
        return;
      }

      const res = await axios.post('http://127.0.0.1:8000/api/register', formData);
      console.log(res.data); // Handle success response

      // Redirect to login page
      navigate('/Login');
    } catch (err) {
      console.error(err.response.data); // Handle error response
      setErrorMessage('Registration failed. Please try again.');
    }
  };



  const buttonStyle = {
    backgroundColor: 'green',
    color: 'white'
  };

  const errorStyle = {
    color: 'red'
  };

  return (
    <Container className="container">
    <Row className="py-5 justify-content-center">
      <Col sm="12" className="d-flex flex-column align-items-center">
        <h2 className="text-center mb-4">Registration</h2>
        <form onSubmit={handleSubmit} className="w-100">
          <div className="mb-3">
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              className="form-control"
              placeholder="Name"
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              className="form-control"
              placeholder="Email"
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              className="form-control"
              placeholder="Password"
            />
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-register">
              Register
            </button>
          </div>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </form>
        <label className="registration-label">
          Have an account already?{' '}
          <Link to="/login" style={{ textDecoration: 'none' }}>
            <span className="text-danger">Log in</span>
          </Link>
        </label>
      </Col>
    </Row>
  </Container>
);
};

export default SignUp