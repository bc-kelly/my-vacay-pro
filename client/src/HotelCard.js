import React from "react";
import './HotelCard.css';

function HotelCard({hotel, addHotelToTrip}) {
    return (
        <div className="hotel-card"> 
            <img src={hotel.image} alt={hotel.name}/>
            <h3> {hotel.name} </h3>
            <h3> {hotel.city_state} </h3>
            <div> 
            <button className='see-details'> 
                    <a href={`http://localhost:4000/showhotel/${hotel.id}`}> see details </a> 
                </button>
            <button className='see-details' onClick={()=>addHotelToTrip(hotel)}> 
                    add to my trips 
                </button>
            </div>
        </div>

    )
}

export default HotelCard;