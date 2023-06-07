import React from 'react'
import './Appointment.css'

const Appointment = () => {
    
  
  return (
    <div className="container-fluid py-5">
        <div className="container mt-5">
            <div className="row gx-5">
                <div className="col-lg-6 mb-5 mb-lg-0">
                    <div className="mb-5">
                        <h5 className="d-inline-block text-primary text-uppercase ">Appointment</h5>
                        <h1 className="display-4">Make An Appointment</h1>
                    </div>
                    <p className="mb-5">Early detection of retinal abnormalities has a potential of diabetes prevention, besides being essential in preventing the progression of DR and/or diabetic macular edema (DME), along with other complications that could lead to loss of vision. Current DR screening methods utilize retinal fundus imaging and manual assessment.</p>
                
                </div>
                <div className="col-lg-6">
                    <div className="bg-light text-center rounded p-5">
                        <h1 className="mb-5 mt-5">Book An Appointment</h1>
                        <form>
                            <div className="row g-3 mt-5 mb-5">
                                <div className="col-12 col-sm-6">
                                    <select class="form-select bg-white border-0">
                                        <option selected>Choose Department</option>
                                        <option value="1">Department 1</option>
                                        <option value="2">Department 2</option>
                                        <option value="3">Department 3</option>
                                    </select>
                                </div>
                                <div className="col-12 col-sm-6 mb-4">
                                    <select className="form-select bg-white border-0" >
                                        <option selected>Select Doctor</option>
                                        <option value="1">Dr. Harsy Backley</option>
                                        <option value="2">Dr. Anna Winds</option>
                                        <option value="3">Dr. Nick Leng</option>
                                    </select>
                                </div>
                                <div className="col-12 col-sm-6 mb-4">
                                    <input type="text" className="form-control bg-white border-0" placeholder="Your Name" />
                                </div>
                                <div className="col-12 col-sm-6 mb-4">
                                    <input type="email" className="form-control bg-white border-0" placeholder="Your Email" />
                                </div>
                                <div className="col-12 col-sm-6 mb-4">
                                    <div className="date" id="date" data-target-input="nearest">
                                        <input type="text"
                                            className="form-control bg-white border-0 datetimepicker-input"
                                            placeholder="Date" data-target="#date" data-toggle="datetimepicker" />
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 mb-4">
                                    <div className="time" id="time" data-target-input="nearest">
                                        <input type="text"
                                            className="form-control bg-white border-0 datetimepicker-input"
                                            placeholder="Time" data-target="#time" data-toggle="datetimepicker"/>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-primary w-100 py-3" type="submit">Make An Appointment</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div> )
}

export default Appointment