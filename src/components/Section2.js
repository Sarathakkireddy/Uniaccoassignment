import React, { useState } from 'react'
import Card from './Card';
import "../styles/section2.css"

function Section2() {
    let details1=[{image:"sc2p1.png",star:"5.0(19) Japan",desc:"Learn & Plan Kyoto trip with local advisor Yuko",price:"635"},
    {image:"sc2p2.png",star:"5.0(48) Japan",desc:"Plan the perfect Customized trip...",price:"3,808"},
    {image:"sc2p3.png",star:"5.0(14) Japan",desc:"Create a customized Guide book of Tokyo...",price:"2,934"},
    {image:"sc2p4.png",star:"5.0(3) Japan",desc:"Plan a Tour Not Crowed but Cool Sites in Tokyo",price:"635"},
    {image:"sc2p5.png",star:"5.0(3) Japan",desc:"Design a perfect Tokyo trip with a Tokyo expert",price:"635"},
    {image:"sc2p6.png",star:"5.0(5) Japan",desc:"Plan a Dream Japan Vacation",price:"635"}]
    let details2=[ {image:"sc2p7.png",star:"5.0(3) Japan",desc:"Make original itinerary in Kyoto with Akari",price:"3,836"},
    {image:"sc2p8.png",star:"4.99(170) United States",desc:"Plan The Perfect New York Vacation",price:"1,579"},
    {image:"sc2p9.png",star:"5.0(24) Spain",desc:"Design your trip to Barcelona with  Gemma",price:"4,320"},
    {image:"sc2p10.png",star:"5.0(16) Spain",desc:"Plan The Perfect Barcelona Vacation",price:"1,350"},
    {image:"sc2p11.png",star:"4.92(50) Italy",desc:"Create your Rome itinerary with Debora",price:"540"},
    {image:"sc2p12.png",star:"5.0(20) Italy",desc:"Plan a Venice venture with Giulia",price:"2,700"}]
    let type="sc2";
    let [pages,setpages]=useState(0);
  return (
    <div className='sc2div'>
    <h3 className='sc2heading'>Plan a trip with help from local Hosts around the world</h3>
    <span className={pages===0?"backscn":"backsc"} onClick={()=>{setpages(0)}} ><i class="fa-solid fa-less-than"></i></span><span className={pages===1?"frontscn":"frontsc"} onClick={()=>{setpages(1)}}><i class="fa-solid fa-greater-than"></i></span>
    <div className='sc2scroll'>
    <div className='sc2'>
    {(pages===0?details1:details2).map((dets,dindex)=>{
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
  )
}

export default Section2