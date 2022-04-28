import React from "react";
import HotelCard from './HotelCard'

function MyTrips({hotelTrip}) {

    const showAddedHotel = hotelTrip.map((addedHotel) => {
        return (
            <HotelCard 
            key={addedHotel.id} 
            hotel={addedHotel}
            />
        
        )
    })

    return (
        <div className="trip-card" > 
            {showAddedHotel}
           
        </div>

    )
}

export default MyTrips;