import React from 'react';
import ExperienceChild from './ExperienceChild';

export default function Experience() {
    const images=[
        {
            "id":"1",
            "img":""           
        },
        {
            "id":"2",
            "img":""           
        },
        {
            "id":"3",
            "img":""           
        },
        {
            "id":"4",
            "img":""           
        },
        {
            "id":"5",
            "img":""           
        },
        {
            "id":"6",
            "img":""           
        },
        {
            "id":"7",
            "img":""           
        },
        {
            "id":"8",
            "img":""           
        },
        {
            "id":"9",
            "img":""           
        }
    ]
  return (
    <div>
        <>
        <ExperienceChild images={images}/>
        </>
    </div>
  
)

}

