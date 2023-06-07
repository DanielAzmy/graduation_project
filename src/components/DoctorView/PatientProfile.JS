import React, { useState, useEffect } from 'react';

const PatientProfile = ({ match }) => {
  const patientId = match.params.id;
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

  const baseURL = 'http://127.0.0.1:8000/api/patients/' + patientId;

  console.log(patient)

  return (
    <div className="container mt-4">
      <h1>Patient Profile</h1>

      <div>
        <h2>{patient.name}</h2>
        <p>Age: {patient.age}</p>
        <p>Sex: {patient.sex}</p>
        <p>Birthdate: {patient.birthdate}</p>
        <p>Last Visit: {patient.lastVisit}</p>
        <img
          src={`${baseURL}${patient.photo}`}
          alt={patient.name}
          className="patient-photo"
        />
      </div>
    </div>
  );
};

export default PatientProfile;
