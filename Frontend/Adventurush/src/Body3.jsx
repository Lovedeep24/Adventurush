import React from 'react'
import styles from "./Styles/Body3.module.css";
export default function Body3() {
    const DA = [
        {
          id: "1",
          title: "Solo Adventure",
          img: "https://www.adventurush.com/wp-content/uploads/2024/02/Copy-of-shutterstock_668302828-1.jpg",
          
        },
        {
          id: "2",
          title: "Family Adventure",
          img: "https://www.adventurush.com/wp-content/uploads/2024/02/shutterstock_1406306630-1.jpg",
        },
        {
          id: "3",
          title: "Couples/Group Adventure",
          img: "https://www.adventurush.com/wp-content/uploads/2024/02/shutterstock_1561227292-1.jpg",
        }];
  return (
    <div className={styles.Body3}>
      <h2 className={styles.heading1}>LIVE THE ADVENTURE <br/>OF YOUR CHOICE</h2>
      <h3 className={styles.heading2}>PICK BY TRAVELLER</h3>
      <div className={styles.Traveller}>

      </div>
      <hr></hr>
    </div>
  )
}
