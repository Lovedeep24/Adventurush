import React from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styles from "./Styles/Body4.module.css";
import { Link } from "react-router-dom";
export default function Body4() {
  return (
    <>
    <div className={styles.body4}>
      <div className={styles.left}>
    <p className={styles.Disc}>DISCOVER<br/> AND <br/>BE INSPIRED</p>
    <button className={styles.chooseBtn} ><Link to="More">Explore More</Link></button>
      </div>

      <div className={styles.right}>
        <p className={styles.custom}>CUSTOMIZE<br/> YOUR<br/> ADVENTURE</p>
      </div>
    </div>
    </>
  )
}
