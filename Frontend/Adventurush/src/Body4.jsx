import React from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styles from "./Styles/Body4.module.css";
import Discover from "./Photos/discover-inspired.png";
import Inspire from "./Photos/Custom-Adv.png";
export default function Body4() {
  return (
    <div className={styles.body4}>
      <div className={styles.left}>
    <img src={Discover}/>
    <p className={styles.Disc}>DISCOVER<br/> AND BE<br/> INSPIRED</p>
      </div>

      <div className={styles.right}>
        <img src={Inspire}/>
        <p className={styles.custom}>CUSTOMIZE<br/> YOUR<br/> ADVENTURE</p>
      </div>
    </div>
  )
}
