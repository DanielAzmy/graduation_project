import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errorMessage, setErrorMessage] = useState('');

  const { email, password } = formData;

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/login', {
        email,
        password,
      });

      // Assuming the server responds with a success message
      const { message } = response.data;
      console.log(message); // Handle success message

      // Redirect to the home page or any other protected route
      navigate('/DoctorView');
    } catch (error) {
      // Handle login error
      // Display an error message or perform any necessary actions
      if (error.response && error.response.data) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage('Login failed. Please try again.');
      }
    }
  };

  return (
    <Container className="container">
      <Row className="py-5 justify-content-center">
        <Col sm="12" className="d-flex flex-column align-items-center">
          <h2 className="text-center mb-4">Login</h2>
          <form onSubmit={handleSubmit} className="w-100">
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
              <button type="submit" className="btn btn-login">
                Login
              </button>
            </div>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
          </form>
          <label className="registration-label">
            Don't have an account?{' '}
            <Link to="/signup" style={{ textDecoration: 'none' }}>
              <span className="text-danger">Sign up</span>
            </Link>
          </label>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
