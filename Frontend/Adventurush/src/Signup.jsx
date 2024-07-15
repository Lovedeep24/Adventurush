import React, { useState } from 'react'
import styles from "./Styles/Signup.module.css";
import backgroundimage from "./Photos/login-bgimage.jpg";
import { Link } from "react-router-dom";
import axios from "axios";
export default function Signup() {
    const [email,setEmail]=useState(``);
    const [password,setPassword]=useState(``);
    const [name,setName]=useState(``);
  
    const handleSubmit=async(e)=>{
      e.preventDefault();
      
      try {
        const response=await axios.post("http://localhost:8000/signup",{
          name,email,password
        })
        console.log(response.status);
        // console.log(`requested data : {${email},${password},${name}}`);
        if(response.status === 200)
          {
            alert("signup succesfull");
          } 
      } catch (error) {
        console.log(error.response.status);
        if(error.response.status === 400)
        {
          alert("User already Exist");
        }
        else if(error.response.status === 404)
        {
          alert("No user Found");
        }
        else{
          alert("An error occured");
        }
      }
    }
  return (
    <>
     <div className={styles.empty}></div>
     <div className={styles.main}>
    <div className={styles.signup}>
        <h1>Signup</h1>
        <form  className={styles.abc} onSubmit={handleSubmit}>
                <input className={styles.name} type='text' onChange={(e)=>{setName(e.target.value)}} placeholder='Name' required /> 
                <br></br>
                <input className={styles.email} type='email' onChange={(e)=>{setEmail(e.target.value)}} placeholder='Email' required />   
                <br></br>
                <input className={styles.password} type='password' onChange={(e)=>{setPassword(e.target.value)}} placeholder='Password' required />    
                <br></br>
                <button type='submit' className={styles.signupButton}>Signup</button>
        </form>
        </div>
        <div className={styles.background}>
      <img src={backgroundimage}></img>
    </div>
    </div>
    </>
  )
}
