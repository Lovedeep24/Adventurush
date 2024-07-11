import React from 'react'
import styles from "./Styles/Nav.module.css";
import { Link } from "react-router-dom";
import logo from "./Photos/Logo.png";
export default function Nav() {
  return (
      <>
      <div className={styles.mainNav}>
        <div className={styles.navbar}>
        <Link to="/" className={styles.logo}><img src={logo}></img></Link>
        <input className={styles.searchbar} type='text' name='search' id='search' placeholder='Search Destinations or Experience'/>
        <div className={styles.contacts}>
        <div className={styles.call}><img src="./Photos/telephone.jpg" alt="call"/></div>
        <a className={styles.call} href='./Photos/telephone.jpg'></a>
        <div className={styles.profile}><img src="./" alt="profile"/></div>
        <div className={styles.cart}>CA</div>
        </div>
        </div>
        <div className={styles.secondNav}>
           <div className={styles.anc}><a><Link to="Offers">Offers</Link></a></div>
           <div className={styles.anc}><a><Link to="Experience">Experience</Link></a></div>
           <div className={styles.anc}><a><Link to="Destination">Destination</Link></a></div>
           <div className={styles.anc}><a><Link to="More">More</Link></a></div>
      </div>
      </div>
      </>
  )
}
