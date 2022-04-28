import React from "react";
import HotelCard from './HotelCard';
import SeeDetailsBtn from './SeeDetailsBtn';
import './Browse.css';




function Browse({hotels, addHotelToTrip}) {

    const hotelCard = hotels.map(hotel => {
        return ([
            <div className="browse-card"> 
        <HotelCard key={hotel.id} hotel={hotel} addHotelToTrip={addHotelToTrip} />
        <SeeDetailsBtn key={hotel.id} hotel={hotel} />  
        </div>
        ])
    })


    return (
        <div > 
            {hotelCard}
            {/* <SeeDetailsBtn hotels={hotels} /> */}
        </div>
    )
}

export default Browse;