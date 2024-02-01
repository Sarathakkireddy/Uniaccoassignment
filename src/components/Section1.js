import React from 'react'
import Card from './Card'
import "../styles/section1.css"

function Section1() {
    let details=[{image:"sc1p1.png",desc:"Most popular around the world", head:"collection"},{image:"sc1p2.png",desc:"Easy for itinerary planning", head:"collection"},{image:"sc1p3.png",desc:"Great for team building", head:"collection"},{image:"sc1p4.png",desc:"Fun for the family", head:"collection"}]
    let type="sc1";
    return (
    <>
    <div className='sc1div'>
        <h3 className='sc1heading'>New this week</h3>
        <div className='sc1scroll'>
        <div className='sc1'>
        {details.map((dets,dindex)=>{
            return (
                <Card 
                dets={dets}
                dindex={dindex}
                type={type}
                />
            )
        })}
        </div>
        </div>
        
        
    </div>
    </>
  )
}

export default Section1