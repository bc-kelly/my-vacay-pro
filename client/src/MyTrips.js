import React from "react";
import HotelCard from './HotelCard'
import MyTripsForm from './MyTripsForm'
import './MyTrips.css'

function MyTrips({hotelTrip}) {

    const showAddedHotel = hotelTrip.map((addedHotel) => {
        return (
            <div className="trip-card" > 
            <HotelCard 
            key={addedHotel.id} 
            hotel={addedHotel}
            />
            <MyTripsForm />
        </div>
        )
    })

    return (
        <div > 
            {showAddedHotel}
           
        </div>

    )
}

export default MyTrips;