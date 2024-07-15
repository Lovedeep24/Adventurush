import React from 'react'
import styles from "./Styles/Nav.module.css";
import { Link } from "react-router-dom";
import logo from "./Photos/Logo.png";
import { FaRegUser , FaSignInAlt } from "react-icons/fa";
export default function Nav() {

  return (
      <>

      <div className={styles.mainNav}>
        <div className={styles.navbar}>
        <Link to="/" className={styles.logo}><img src={logo}></img></Link>
        <input className={styles.searchbar} type='text' name='search' id='search' placeholder='Search Destinations or Experience'/>
        <div className={styles.logos}>
        <div className={styles.loginLogo}><Link to="Login" ><FaRegUser /></Link></div>
        <div className={styles.signupLogo}><Link to="Signup" ><FaSignInAlt /></Link></div>
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
