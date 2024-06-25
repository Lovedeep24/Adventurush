import React from 'react'
import styles from "./Styles/Body3.module.css";
import solo1 from "./Photos/Solo-1.jpg";
import Family from "./Photos/Family-1.jpg";
import Couple from "./Photos/Couple.jpg";
import Gutsy from "./Photos/Gutsy-1.jpg";
import Pupmed from "./Photos/Pumped-1.jpg";
import Daredevil from "./Photos/Daredevil-1.png";
export default function Body3() {
    const travel = [
        {
          id: "1",
          title: "Solo Adventure",
          sub:"Lone wolf",
          img: solo1,
          
        },
        {
          id: "2",
          title: "Family Adventure",
          sub:"Brave together",
          img: Family,
        },
        {
          id: "3",
          title:"Group Adventure",
          sub:"Birds of Feather",
          img: Couple,
        }];

      const adventure = [
          {
            id: "1",
            title: "Pumped Adventure",
            sub:"Fun Adventure",
            img: Pupmed,
            
          },
          {
            id: "2",
            title: "Gutsy Adventure",
            sub:"Thrill Adventure",
            img: Gutsy,
          },
          {
            id: "3",
            title:"Daredevil Adventure",
            sub:"U crazy!",
            img: Daredevil,
          }];
  return (
    <div className={styles.Body3}>
      <h2 className={styles.heading1}>LIVE THE ADVENTURE <br/>OF YOUR CHOICE</h2>
      <h3 className={styles.heading2}>PICK BY TRAVELLER</h3>
      <hr></hr>
      <div className={styles.travellerMainDiv}>
        {
        travel.map((D2)=>{
          return(<div className={styles.pickByTravel} key={D2.id}>
            <img src={D2.img} alt={D2.title}/>
            <p className={styles.pickByTravelTitle}>{D2.title}</p>
            <p className={styles.pickByTravelSub}>{D2.sub}</p>
          </div>)
        })
      }
      </div>
      
      <h3 className={styles.heading2}>PICK BY ADVENTURE</h3>
      <hr></hr>
      <div className={styles.adventureMainDiv}>
      {
        adventure.map((D)=>{
          return(<div className={styles.pickByAdventure} key={D.id}>
            <img src={D.img} alt={D.title}/>
            <p className={styles.pickByAdventureTitle}>{D.title}</p>
            <p className={styles.pickByAdventureSub}>{D.sub}</p>
          </div>)
        })
      }
      </div>

    </div>
  )
}
