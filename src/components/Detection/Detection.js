import React, { useState, useContext } from 'react'
import { Form, Button } from 'react-bootstrap';
import AuthContext from '../../context/AuthContext';

const Detection = () => {
    const [pname, setPName] = useState("");
    const [file, setFile] = useState("");



    const setdata = (event) => {
        setPName(event.target.value)
    }
    const setimgfile = (event) => {
        setFile(event.target.files[0])
    }
    const addUserData = async (e) => {
        e.preventDefault();

        var formData = new FormData();
        formData.append("photo", file)
        formData.append("fname", pname);
    }


    
    return (
        <div>
            <div className='container mt-5 '>
                
                <h1>Upload Your Image</h1>

                <Form>
                    <Form.Group className="mb-5 mt-5" controlId="formBasicEmail">
                        <Form.Label>Patient Name:</Form.Label>
                        <Form.Control type="text" name='pname' onChange={setdata} />
                    </Form.Group>

                    <Form.Group className="mb-5 mt-5" controlId="formBasicPassword">
                        <Form.Label>Select Your Image *</Form.Label>
                        <Form.Control type="file" name='photo' onChange={setimgfile} />
                    </Form.Group>
                    <Button className="mb-5 mx-2" variant="primary" type="submit" >
                        Detect
                    </Button>
                    <Button className="mb-5 " variant="primary" type="submit" onClick={addUserData} >
                        Save
                    </Button>
                </Form>
            </div>

        </div>
    )
}

export default Detection;