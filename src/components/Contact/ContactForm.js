import "./Contact.css"
import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import "./Contact.css"
const ContactForm = () => {

  const [name,setname]=useState("");
 
  const [show,setshow]=useState(true);
  const changename=(event)=>{
      setname(event.target.value)
  }


  const FormHandler=(event)=>{
    event.preventDefault();
    //valdation here
    if(name.length==""){
      setshow(false);
      return;
      }
    
    console.log(name);
    setshow(true)}
   
    return (
    <div className="contact">
    <div className="container">
    <div className="main-heading">
     <h1> Contact Us</h1>
     <div className="content">
     <form onSubmit={FormHandler}>
        <input  className="main-input" placeholder="Name" onChange={changename} />
           {!show && <p className="p">not empty</p>}
       <input  className="main-input" placeholder="Email"/>
         
       <input  className="main-input" placeholder="Mobile Number" />
     
       <textarea className="main-input" placeholder="Message" rows="4" ></textarea>
       
       <input className="submit" type="submit" value="Submit"/>
       </form>
    <div className="info">
      <h4>Get In Touch</h4>
      <span className="phone">+00 123-456-789</span>
      <span className="phn">+00 123-456-789</span>
      <h4>Where We Are</h4>
      <address className="address">Address 17 <br/>New York,NYC<br/>123-4560-789<br/>USA</address>
    </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default ContactForm