import React from "react";
import './HotelCard.css';

function HotelCard({hotel}) {

    return (
        <div className="hotel-card" > 
            <img className="hotel-image" src={hotel.image} alt={hotel.name}/>
            <h3 className="hotel-name" > {hotel.name} </h3>
            <h3 className="hotel-city" > {hotel.city} </h3>
            <h3 className="hotel-state"> {hotel.state} </h3>
        </div>
    )
}

export default HotelCard;