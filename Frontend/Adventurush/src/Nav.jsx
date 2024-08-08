import React from 'react'
import styles from "./Styles/Nav.module.css";
import { Link } from "react-router-dom";
import{FaBars,FaTimes} from "react-icons/fa";
import { FaRegUser , FaSignInAlt} from "react-icons/fa";
import { GiMountains } from "react-icons/gi";;
import { useState } from 'react';
export default function Nav() {
  const[click,setClick]=useState(false);
  const handleClick=()=>{
      setClick(!click);
  }
  return (
      <>
   
      <div className={styles.mainNav}>
        <div className={styles.navbar}>
          <div className={styles.logo}><Link to="/"  ><GiMountains /></Link></div>
          
          <input className={styles.searchbar} type='text' name='search' id='search' placeholder='Search Destinations or Experience'/>
          <div className={styles.logos}>
          <div className={styles.loginLogo}><Link to="Login" ><FaRegUser /></Link></div>
          <div className={styles.signupLogo}><Link to="Signup" ><FaSignInAlt /></Link></div>
          {/* <div className={styles.hamburger} onClick={handleClick}>
              {click ?(<FaTimes size={20} style={{color:"#fff"}} />) 
              : (<FaBars size={20} style={{color:"#fff"}} />)}
          </div> */}
          </div>
        </div>
      
       
          <div className={styles.secondNav}>
            <div className={styles.anc}><Link to="Offers">Offers</Link></div>
            <div className={styles.anc}><Link to="Experience">Experience</Link></div>
            <div className={styles.anc}><Link to="Destination">Destination</Link></div>
            <div className={styles.anc}><Link to="More">More</Link></div>
          </div>
      </div>
      </>
  )
}
