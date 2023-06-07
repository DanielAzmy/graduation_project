import { Container } from 'react-bootstrap'
import NavBar from './components/Nav/NavBar';
// import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Home from './components/Home.js/Home';
import React, { useState } from "react";
import AboutUs from './components/About/AboutUs';
import DoctorCard from './components/Doctors/DoctorCard';
import Contact from './components/Contact/Contact';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import GalleryCard from './components/Gallery/GalleryCard';
import Login from './components/Auth/Login';
import Footer from './components/Footer/Footer';
import SignUp from './components/Auth/SignUp';
import Appointment from './components/Appointment/Appointment';
import Detection from './components/Detection/Detection';
import { eye } from "./data";
import PrivateRoute from './PrivateRoutes'
import AuthProvider from "./context/AuthContext";
import DoctorView from './components/DoctorView/DoctorView';
import PatientProfilePage from './components/DoctorView/PatientProfilePage';




function App() {
  const [eyeData, setEyeData] = useState(eye)
  const [patients, setPatients] = useState([]);

  const handleAddPatient = (newPatient) => {
    setPatients((prevPatients) => [...prevPatients, newPatient]);
  };



  return (
    <div>
      <NavBar />
      <BrowserRouter>
        <AuthProvider>
          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/doctors" element={<DoctorCard />} />
            <Route path="/gallery" element={<GalleryCard />} />
            <Route path="/doctorview" element={<DoctorView />} />
            <Route path="/PatientProfilePage" element={<PatientProfilePage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/Appointment" element={<Appointment />} />
            <Route path="/detection" element={<Detection />} />


          </Routes>
        </AuthProvider>
      </BrowserRouter>
      <Footer />

    </div>
  );
}

export default App;
