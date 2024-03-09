import React from 'react'
import styles from "./Styles/Body1.module.css";
export default function Body1() {
  return (
    <div className={styles.Body1}>
      <h1 className={styles.heading1}>YOUR PLATFORM FOR <br/>SAFE ADVENTURES</h1>
      <button className={styles.choose} > Choose your Adventure</button>
      <div className={styles.Bodyslider}>
            <div className={styles.SliderComp}>
                    <p>Bike Expedetion</p>
            </div>
      </div>
    </div>
  )
}
