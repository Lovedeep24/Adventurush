import React from 'react';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import styles from "../Styles/Offers.module.css"
export default function Offers() {
  return (
    <>
     <div className={styles.empty}></div>
    <div className={styles.headDiv}>
         <h1 className={styles.experineceHeading}>Offers</h1>
         <div className={styles.container}>
         <a className={styles.homeNav} href="#">Home</a>
         <div className={styles.arrows}><MdKeyboardDoubleArrowRight /></div>
         <a className={styles.experineceNav} >Offers</a>
      </div>
    </div>
    </>
  )
}
