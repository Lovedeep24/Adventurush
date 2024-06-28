import React, { useState } from 'react'
import styles from "./Styles/Body2.module.css";
import { Link } from "react-router-dom";
import ladakh from "./Photos/Ladakh.jpg";
import ladakhCar from "./Photos/Ladakh car.jpg";
import srinagarBike from "./Photos/Srinagar-bike.jpg";
import lehBike from "./Photos/Leh_bike.jpg";
import bungee1 from "./Photos/Rishikesh_bungee.jpg";
import himalyan_bungee from "./Photos/Himalyan_bungee.jpg";
import Paragliding_Manali from "./Photos/Paragliding_Manali.jpg";
import ViewMore from "./Photos/View_more.jpg";
function Body2() {

    const Deals = [
        {
          id: "1",
          title: "5N/6D Ladakh",
          img: ladakh,
          
        },
        {
          id: "2",
          title: "6N/7D Ladakh",
          img: ladakhCar,
        },
        {
          id: "3",
          title: "Srinagar",
          img: srinagarBike,
        },
        {
          id: "4",
          title: "Manali",
          img: lehBike,
        },
        {
          id: "5",
          title: "Bungee Jumping",
          img: bungee1,
        },
        {
          id: "6",
          title: "Himalyan Bungee Jump",
          img: himalyan_bungee,
        },
        {
            id: "7",
            title: "Paragliding",
            img: Paragliding_Manali,
           
        },
        {
          id: "8",
          title: "More Offers",
          img: ViewMore,
         
      }
      ];
      const[startIndex,setStartIndex]=useState(0);
      const previous=()=>{
        if (startIndex > 0) {
          setStartIndex(startIndex - 1);
        }
      }
      const next=()=>{
        if (startIndex < slider.length - 3) {
          setStartIndex(startIndex + 1);
        }
      }
  return (
    <div className={styles.Body2}>
      <h1 className={styles.head1}>EXHILARATING <br/>DEALS</h1>
      <div className={styles.DealsMainDiv}>
      <button onClick={previous} className={styles.prevBtn}><p>&lt;</p></button>
        <button  onClick={next}className={styles.nextBtn}><p>&gt;</p></button> 
      {
           Deals.slice(startIndex, startIndex + 3).map((d)=>{
            return(<div className={styles.DealSlide}  key={d.id}>
                <img src={d.img} alt={d.title} />
                <p className={styles.DealTitle}>{d.title}</p>
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
