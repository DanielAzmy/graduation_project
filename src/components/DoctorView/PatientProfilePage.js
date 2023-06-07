import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const PatientProfilePage = () => {
  const { patientId } = useParams();
  const [patient, setPatient] = useState(null);

  useEffect(() => {
    const fetchPatient = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/api/patients/${patientId}`);
        const data = await response.json();
        setPatient(data);
      } catch (error) {
        console.log('Error fetching patient:', error);
      }
    };
  
    fetchPatient();
  }, [patientId]);
  if (!patient) {
    return <p>Loading patient profile...</p>;
  }
  
  
  else
    return (
      <div>
        <h1>Patient Profile Page</h1>
        <p>Patient ID: {patientId}</p>
        <h2>{patient.name}</h2>
        <p>Age: {patient.age}</p>
        <p>Sex: {patient.sex}</p>
        <p>Birthdate: {patient.birthdate}</p>
        <p>Last Visit: {patient.lastVisit}</p>
        <img src={patient.photo} alt={patient.name} className="patient-photo" />

        {/* Render the remaining details of the patient's profile */}
        <p>Address: {patient.address}</p>
        <p>Phone: {patient.phone}</p>
        <p>Email: {patient.email}</p>
        {/* Add any additional profile details you want to display */}
      </div>
    );
  };
export default PatientProfilePage;
