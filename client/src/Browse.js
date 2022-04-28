import React from "react";
import HotelCard from './HotelCard';
import SeeDetailsBtn from './SeeDetailsBtn';
import AddToMyTripsBtn from './AddToMyTripsBtn';
import './Browse.css';


function Browse({hotels, addHotelToTrip}) {

    const hotelCard = hotels.map(hotel => {
        return ([
            <div className="browse-card"> 
        <HotelCard key={hotel.id} hotel={hotel} />
        <SeeDetailsBtn hotel={hotel} />  
        <AddToMyTripsBtn hotel={hotel} addHotelToTrip={addHotelToTrip}/>  
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