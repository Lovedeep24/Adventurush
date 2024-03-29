import React, { useEffect } from 'react';
import { useState } from 'react';
import styles from "./Styles/Body1.module.css";
import bikeExpeditionImg from "./Photos/bike-expedition.jpg";
import trekkingImg from "./Photos/trekking-1.jpg";
import skydivingImg from "./Photos/Sky-diving-.jpg";
import bungeeJumpImg from "./Photos/Bungee-Jumping-1.jpg";
import riverRaftingImg from "./Photos/River-Rafting-1.jpg";
import scubaDivingImg from "./Photos/Scuba-1.jpg";
export default function Body1() {
 
  const slider = [
    {
      id: "1",
      title: "Bike Expedition",
      img: bikeExpeditionImg,
    },
    {
      id: "2",
      title: "Trekking",
      img: trekkingImg,
    },
    {
      id: "3",
      title: "Skydiving",
      img: skydivingImg,
    },
    {
      id: "4",
      title: "Bungee Jump",
      img: bungeeJumpImg,
    },
    {
      id: "5",
      title: "River Rafting",
      img: riverRaftingImg,
    },
    {
      id: "6",
      title: "Scuba Diving",
      img: scubaDivingImg,
    }
  ];
 
  const[currentIndex,setCurrentIndex]=useState(1);
  const goToPrevious=()=>{
    const isFirstSlide= currentIndex === 0;
    const newIndex = isFirstSlide ? slider.length -1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }
  const goToNext=()=>{
    const isFirstSlide= currentIndex === slider.length-1;
    const newIndex = isFirstSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }
  return (
    <div className={styles.Body1}>
      <h1 className={styles.heading1}>YOUR PLATFORM FOR <br/>SAFE ADVENTURES</h1>
      <button className={styles.chooseBtn} > Choose your Adventure</button>
      <div className={styles.sliderBody}>

        <button onClick={goToPrevious} className={styles.prevBtn}><p>&lt;</p></button>
        <button onClick={goToNext} className={styles.nextBtn}><p>&gt;</p></button> 
                {
                  slider.slice(currentIndex, currentIndex + 3).map((sl)=>{
                  return(<div className={styles.slide}  key={sl.id}>
                   <img src={sl.img} alt={sl.title} />
                    <p className={styles.sliderTitle}>{sl.title}</p>
                  </div>)
                })
                }  

      </div>
    </div>
  )
              }