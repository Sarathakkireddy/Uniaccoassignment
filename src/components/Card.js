import React from 'react'
import '../styles/card.css'

function Card({dets,dindex,type}) {
  return (
    <div className={type==="sc2"?"sc2card":"sc1card"}>
    <div className={type==="sc1"?"sc1carddiv":"carddiv"} style={{backgroundImage:`url(${dets.image})`,backgroundRepeat: "no-repeat"}}> 
        {type==="sc1"?<>
        <span className='cardhead'>{dets.head}</span><br/>
        <span className='carddesc'>{dets.desc}</span><br/>
        <button className='cardbtn'>Show all</button></>:<>
        <span className='like'><i class="fa-regular fa-heart" id='heart'></i></span>
        </>}
    </div>
    {type==="sc2"?<>
    <i class="fa-solid fa-star"></i>{dets.star}<br/>
    {dets.desc}<br/>
    <b>From </b>
    <i class="fa-solid fa-indian-rupee-sign"></i>
    <b>{dets.price}</b> /person
    </>
    :<></>}
    </div>
    

  )
}

export default Card