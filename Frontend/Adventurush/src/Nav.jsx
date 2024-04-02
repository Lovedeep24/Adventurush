import React from 'react'
import styles from "./Styles/Nav.module.css";
import { Link } from "react-router-dom";
export default function Nav() {
  return (
    <>
      <>
      <div className={styles.mainNav}>
        <div className={styles.navbar}>
        <h2 className="logo"><Link to="/">Adventuruh</Link></h2>
        <input className={styles.searchbar} type='text' name='search' id='search' placeholder='Search Destination and Experince'/>
        </div>
        <div className={styles.secondNav}>

            <a id={styles.anchor}><Link to="Destination">Destination</Link></a>
            <a id={styles.anchor}><Link to="Offers">Offers</Link></a>
            <a id={styles.anchor}><Link to="Experience">Experience</Link></a>
            <a id={styles.anchor}><Link to="More">More</Link></a>
      </div>
      </div>
      </>
    </>
  )
}
