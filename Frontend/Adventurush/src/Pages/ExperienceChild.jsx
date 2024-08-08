import React from 'react'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import styles from "../Styles/ExperienceChild.module.css";
export default function ExperienceChild({images}) {
  return (
    <>
    <div className={styles.empty}></div>
    <div className={styles.headDiv}>
         <h1 className={styles.experineceHeading}>Experiences</h1>
         <div className={styles.container}>
         <a className={styles.homeNav} href="#">Home</a>
         <div className={styles.arrows}><MdKeyboardDoubleArrowRight /></div>
         <a className={styles.experineceNav}>Experience</a>
      </div>
    </div>
      
    </>
  )
}

