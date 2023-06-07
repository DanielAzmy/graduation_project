import React, { useState, useEffect } from 'react';
import './DoctorView.css';
import { Link } from 'react-router-dom';

const DoctorView = () => {
  const [patients, setPatients] = useState([]);
  const [newPatient, setNewPatient] = useState({
    name: '',
    age: '',
    sex: '',
    birthdate: '',
    lastVisit: '',
    photo: null,
  });
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(true);
  const [addingPatient, setAddingPatient] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewPatient((prevPatient) => ({ ...prevPatient, [name]: value }));
  };

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    setNewPatient((prevPatient) => ({ ...prevPatient, photo: file }));
  };

  const generateRandomId = () => {
    return Math.floor(Math.random() * 1000000);
  };

  const fetchPatients = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/patients');
      const data = await response.json();
      setPatients(data);
      setLoading(false); // Set loading to false once data is fetched
    } catch (error) {
      console.log('Error fetching patients:', error);
    }
  };

  useEffect(() => {
    fetchPatients();
  }, []);

  const addPatient = async () => {
    if (addingPatient) return; // Return if already adding patient

    setAddingPatient(true); // Set adding patient state to true

    const id = generateRandomId();
    const formData = new FormData();

    Object.entries(newPatient).forEach(([key, value]) => {
      formData.append(key, value);
    });

    try {
      const response = await fetch('http://127.0.0.1:8000/api/patients', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const createdPatient = await response.json();
        setPatients([...patients, createdPatient]);
        setNewPatient({
          name: '',
          age: '',
          sex: '',
          birthdate: '',
          lastVisit: '',
          photo: null,
        });
      } else {
        console.log('Failed to add patient:', response.status);
      }
    } catch (error) {
      console.log('Error adding patient:', error);
    } finally {
      setAddingPatient(false); // Set adding patient state back to false
    }
  };

  const deletePatient = async (id) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/patients/${id}/`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setPatients(patients.filter((patient) => patient.id !== id));
      } else {
        console.log('Failed to delete patient:', response.status);
      }
    } catch (error) {
      console.log('Error deleting patient:', error);
    }
  };

  const toggleForm = () => {
    setShowForm(!showForm); // Toggle the visibility of the form
  };

  return (
    <div className="container mt-4">
      <h1>List of Patients</h1>

      {loading ? (
        <div className="loading-spinner">
          <i className="fa fa-spinner fa-spin"></i> 
        </div>
      ) : (
        <div>
          {patients.length === 0 ? (
            <p>No patients found.</p>
          ) : (
            <table className="table mt-4">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Sex</th>
                  <th>Birthdate</th>
                  <th>Last Visit</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {patients.map((patient) => (
                  <tr key={patient.id}>
                    <td>{patient.id}</td>
                    <Link to={{ pathname: '/PatientProfilePag/${patient.id}', state: { patientId: patient.id } }}>
                      {patient.name}
                    </Link>

                    <td>{patient.age}</td>
                    <td>{patient.sex}</td>
                    <td>{patient.birthdate}</td>
                    <td>{patient.lastVisit}</td>
                    <td>
                      {patient.photo && (
                        <img
                          src={`http://127.0.0.1:8000${patient.photo}`}
                          alt={patient.name}
                          className="patient-photo"
                        />
                      )}
                    </td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => deletePatient(patient.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          <button className="btn btn-primary" onClick={toggleForm}>
            {showForm ? 'Hide Form' : 'Add Patient'}
          </button>

          {showForm && (
            <form>
              <div className="mb-3">
                <label className="form-label">Photo</label>
                <input
                  type="file"
                  className="form-control"
                  name="photo"
                  onChange={handleFileInputChange}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Patient Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={newPatient.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Age</label>
                <input
                  type="number"
                  className="form-control"
                  name="age"
                  value={newPatient.age}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Sex</label>
                <select
                  className="form-select"
                  name="sex"
                  value={newPatient.sex}
                  onChange={handleInputChange}
                >
                  <option value="">Select Sex</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label">Birthdate</label>
                <input
                  type="date"
                  className="form-control"
                  name="birthdate"
                  value={newPatient.birthdate}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Last Visit</label>
                <input
                  type="date"
                  className="form-control"
                  name="lastVisit"
                  value={newPatient.lastVisit}
                  onChange={handleInputChange}
                />
              </div>

              <button className="btn btn-primary" onClick={addPatient}>
                Add Patient
              </button>
            </form>
          )}
        </div>
      )}
    </div>
  );
};

export default DoctorView;
