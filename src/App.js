import './App.css';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

function App() {
  const form = useRef();
  const [data,setData]=useState({
    subject:'',
    email:'',
    messege:'',
  })
  const {subject,email,messege}=data;
  const sendEmail=(e)=>{
    e.preventDefault();

    emailjs.sendForm('service_0rg85xa', 'template_ncvjhbi', form.current, 'ZUbpErOao_iz-SrTJ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
 const changeHandler=(e)=>{
      setData({...data,[e.target.name]:e.target.value})
 }
  

  return (
    <center>
       <form ref={form} onSubmit={sendEmail} style={{marginTop:100}} autoComplete="off">
         <label>Subject</label><br/>
         <input type="text" name="subject" value={subject} onChange={changeHandler} /><br/>
         <label>Email</label><br/>
         <input type="email" name="email" value={email} onChange={changeHandler}/><br/>
         <label>Message</label><br/>
         <textarea type="text" name="messege" value={messege} onChange={changeHandler}/><br/>
         {/* <input /><br/> */}
         <input type="submit" name="submit" /><br/>
       </form>
    </center>
  );
}

export default App;
