import React from "react";
import './HotelCard.css';

function HotelCard({hotel}) {

    return (
        <div className="hotel-card" > 
            <img src={hotel.image} alt={hotel.name}/>
            <h3> {hotel.name} </h3>
            <h3> {hotel.city_state} </h3>
        </div>
    )
}

export default HotelCard;