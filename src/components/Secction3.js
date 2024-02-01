import React, { useState } from 'react'
import Card from './Card';

function Secction3() {
    let details1=[{image:"sc3p1.png",star:"4.97(2,289) Ireland",desc:"Irish Village, History, Culture & Craic, St...",price:"1,440"},
    {image:"sc3p2.png",star:"4.96(158) United States",desc:"Art & Soul of Black Broadway",price:"1,579"},
    {image:"sc3p3.png",star:"4.96(1,410) Japan",desc:"Joy To The Team - A Virtual Magic Show &...",price:"2,144"},
    {image:"sc3p4.png",star:"4.96(196) Jamaica",desc:"Dance with a Jamacian",price:"997"},
    {image:"sc3p5.png",star:"4.98(3,716) Italy",desc:"Pasta with the Grandmas",price:"2,610"},
    {image:"sc3p6.png",star:"4.98(1,437) Jamaica",desc:"Chocolate Origins & Create with a Maker",price:"1,247"}]
    let details2=[{image:"sc3p7.png",star:"4.87(795) Poland",desc:"Murder Mystery Escape Room Games,Great for...",price:"1,556"},
    {image:"sc3p8.png",star:"4.98(593) Japan",desc:"Make Origami with a Cultural Expert from...",price:"1,129"},
    {image:"sc3p9.png",star:"4.92(2,640) Poland",desc:"Solve the Mystery Escape Room,Team-...",price:"1,556"},
    {image:"sc3p10.png",star:"4.99(419) France",desc:"Once-in-a-lifetime Piano Meditation Concert live...",price:"1,800"},
    {image:"sc3p11.png",star:"5.0(19) Great Britain",desc:"Mind Mastery with Goldie Sayers",price:"3,163"},
    {image:"sc3p12.png",star:"4.97(1,678) Colombia",desc:"Learn To Make Argentine Empanadas",price:"1,379"}]
    let type="sc2";
    let [pages,setpages]=useState(0);
  return (
    <>
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
    </>
  )
}

export default Secction3