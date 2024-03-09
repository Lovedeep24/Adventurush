import React from 'react'
import styles from "./Styles/Home.module.css";
export default function Home() {
  return (
    <>
      <>
      <div className={styles.mainNav}>
        <div className={styles.navbar}>
        <input className={styles.searchbar} type='text' name='search' id='search' placeholder='Search Destination and Experince'/>
        </div>
        <div className={styles.secondNav}>
            <a id={styles.navItem} href="">Destination</a>
            <a id={styles.navItem} href="">Offers</a>
            <a id={styles.navItem} href="">Experience</a>
            <a id={styles.navItem} href="">More</a>
        </div>
      </div>
      </>
    </>
  )
}
