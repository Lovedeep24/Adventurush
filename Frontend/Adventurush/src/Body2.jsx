import React, { useState } from 'react'
import styles from "./Styles/Body2.module.css";
import { Link } from "react-router-dom";
function Body2() {

    const Deals = [
        {
          id: "1",
          title: "5N/6D Ladakh",
          img: "https://www.adventurush.com/wp-content/uploads/2024/02/Copy-of-shutterstock_668302828-1.jpg",
          
        },
        {
          id: "2",
          title: "6N/7D Ladakh",
          img: "https://www.adventurush.com/wp-content/uploads/2024/02/shutterstock_1406306630-1.jpg",
        },
        {
          id: "3",
          title: "Srinagar",
          img: "https://www.adventurush.com/wp-content/uploads/2024/02/shutterstock_1561227292-1.jpg",
        },
        {
          id: "4",
          title: "Manali",
          img: "https://www.adventurush.com/wp-content/uploads/2024/02/shutterstock_1405496783-2-1.jpg",
        },
        {
          id: "5",
          title: "Paragliding",
          img: "https://www.adventurush.com/wp-content/uploads/2023/03/Paragliding-manali-768x529.jpg",
        },
        {
          id: "6",
          title: "Scuba Diving",
          img: "https://www.adventurush.com/wp-content/uploads/2024/02/Thumbnail-2-6-1.jpg",
        },
        {
            id: "8",
            title: "More Offers",
            img: " https://www.adventurush.com/wp-content/uploads/2024/02/4-15-1.jpg",
           
        }
      ];
      const[startIndex,setStartIndex]=useState(0);
      const goToPrevious=()=>{
        if (startIndex > 0) {
          setStartIndex(startIndex - 1);
        }
      }
      const goToNext=()=>{
        if (startIndex < slider.length - 3) {
          setStartIndex(startIndex + 1);
        }
      }
  return (
    <div className={styles.Body2}>
      <h1 className={styles.head1}>EXHILARATING <br/>DEALS</h1>
      <div className={styles.DealsMainDiv}>
      <button onClick={goToPrevious} className={styles.prevBtn}><p>&lt;</p></button>
        <button  onClick={goToNext}className={styles.nextBtn}><p>&gt;</p></button> 
      {
           Deals.slice(startIndex, startIndex + 3).map((D)=>{
            return(<div className={styles.DealSlide}  key={D.id}>
                <img src={D.img} alt={D.title} />
                <p className={styles.DealTitle}>{D.title}</p>
              </div>)
           })
      }
      </div>
      <div className={styles.subBody}>
        <h1 className={styles.subBodyHeading}>EXPERIENCE<br/>THE IMPOSSIBLE</h1>
        <button className={styles.chooseBtn} ><Link to="More">Explore More</Link></button>
        <li id={styles.list}>Auntheticate adventure to set your pulse racing</li>
        <hr></hr>
        <li id={styles.list}> verified vendors across 75+ safety & quality guidelines</li>
        <hr></hr>
        <li id={styles.list}>Best cancellation & refund polices with no hidden charges</li>
      </div>
    </div>
  )
}

export default Body2
