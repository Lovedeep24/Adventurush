import { useState } from 'react';
import { Link } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';
import styles from "./Styles/Body1.module.css";
import bikeExpeditionImg from "./Photos/bike-expedition.jpg";
import trekkingImg from "./Photos/trekking-1.jpg";
import skydivingImg from "./Photos/Sky-diving-.jpg";
import bungeeJumpImg from "./Photos/Bungee-Jumping-1.jpg";
import riverRaftingImg from "./Photos/River-Rafting-1.jpg";
import scubaDivingImg from "./Photos/scuba_latest.jpg";
import More from './Pages/More';
import Offers from './Pages/Offers';

export default function Body1() {
 
  const slider = [
    {
      id: "1",
      title: "Bike Expedition",
      alias:"Bike_Expedition",
      img: bikeExpeditionImg,
    },
    {
      id: "2",
      title: "Trekking",
      alias:"Trekking",
      img: trekkingImg,
    },
    {
      id: "3",
      title: "Skydiving",
      alias:"Skydiving",
      img: skydivingImg,
    },
    {
      id: "4",
      title: "Bungee_Jump",
      alias:"Bungee_Jump",
      img: bungeeJumpImg,
    },
    {
      id: "5",
      title: "River_Rafting",
      alias:"River_Rafting",
      img: riverRaftingImg,
    },
    {
      id: "6",
      title: "Scuba_Diving",
      alias:"Scuba_Diving",
      img: scubaDivingImg,
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
    <>
    <div className={styles.Body1}>
      <h1 className={styles.heading1}>YOUR PLATFORM FOR <br/>SAFE ADVENTURES</h1>
      <Link to={Offers}><div  className={styles.chooseBtn} >Choose your Adventure  </div></Link>
      <div className={styles.sliderBody}>

        <button onClick={goToPrevious}  className={styles.prevBtn} aria-label="Previous Slide"><p>&lt;</p></button>
        <button onClick={goToNext} className={styles.nextBtn} aria-label="Next Slide"><p>&gt;</p></button> 
                {
                  slider.slice(startIndex, startIndex + 3).map((sl)=>{
                  return(<>
                  <Link to={sl.alias} key={sl.id}  className={styles.slideLink}>
                   <img src={sl.img} alt={sl.title} />
                      <p className={styles.sliderTitle}>{sl.title}</p>
                    </Link>
                     </> )
                })
                }  
      </div>
      <p className={styles.slogan}>AUTHENTICATE EXPERINCES <br/>FROM VERIFIED PARTNER</p>
    </div>
    </>
  )
              }