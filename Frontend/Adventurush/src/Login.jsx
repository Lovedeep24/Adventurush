import React, { useState } from 'react'
import styles from "./Styles/Login.module.css";
import axios from "axios";
import backgroundimage from "./Photos/login-bgimage.jpg";
export default function Login() {
    const [email,setEmail]=useState(``);
    const [password,setPassword]=useState(``);

    const handleSubmit=async(e)=>{
      e.preventDefault();

      try {
       const response= await axios.post("http://localhost:8000/login",{
          email,password
        })
        if(response.status === 200)
        {
          alert("Login Successfull");
        }
       
      } catch (error) {
        console.log(error.response.status);
        if(error.response.status === 404)
        {
          alert("User not found");
        }
        else if(error.response.status === 400){
          alert("Inavlid password");
        }
        else{
          alert("Something went wrong");
        }
      }
    }

  return (
    <>
     <div className={styles.empty}></div>
     <div className={styles.main}>
    <div className={styles.login}>
        <h1>Login</h1>
        <form className={styles.abc} onSubmit={handleSubmit}>
                <input className={styles.email} type='text' onChange={(e)=>{setEmail(e.target.value)}} placeholder='Email' required />   
                <br></br>
                <input className={styles.password} type='password' onChange={(e)=>{setPassword(e.target.value)}} placeholder='Password' required />    
                <br></br>
                <button type='submit' className={styles.loginButton}>Login</button>
            
        </form>
    </div>
    <div className={styles.background}>
      <img src={backgroundimage}></img>
    </div>
    </div>
    </>
  )
}
