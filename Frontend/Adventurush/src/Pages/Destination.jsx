import React from 'react';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import {Link} from "react-router-dom";
import styles from "../Styles/Destination.module.css";
export default function Destination() {
  return (
    <>
       <div className={styles.empty}></div>
    <div className={styles.headDiv}>
         <h1 className={styles.experineceHeading}>Destination</h1>
         <div className={styles.container}>
         <Link className={styles.homeNav} to="/">Home</Link>
         <div className={styles.arrows}><MdKeyboardDoubleArrowRight /></div>
         <a className={styles.experineceNav}>Destination</a>
      </div>
    </div>
    </>
  )
}
