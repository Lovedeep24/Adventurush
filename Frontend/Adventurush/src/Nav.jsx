import React from 'react'
import styles from "./Styles/Nav.module.css";
import { Link } from "react-router-dom";
export default function Nav() {
  return (
    <>
      <>
      <div className={styles.mainNav}>
        <div className={styles.navbar}>
        <h2 className="logo"><Link to="/">Adventuruh</Link><img src=''></img></h2>
        <input className={styles.searchbar} type='text' name='search' id='search' placeholder='Search Destination or Experince'/>
        </div>
        <div className={styles.secondNav}>
           <div className={styles.anc}><a><Link to="Offers">Offers</Link></a></div>
           <div className={styles.anc}><a><Link to="Experience">Experience</Link></a></div>
           <div className={styles.anc}><a><Link to="Destination">Destination</Link></a></div>
           <div className={styles.anc}><a><Link to="More">More</Link></a></div>
      </div>
      </div>
      </>
    </>
  )
}
