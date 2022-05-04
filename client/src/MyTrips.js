import React from "react";
import HotelCard from './HotelCard'
import MyTripsForm from './MyTripsForm'
import './MyTrips.css'

function MyTrips({hotelTrip, trips}) {

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
            <div > 
                {showAddedHotel}
            </div>
        <div> 
            place posted trips here
        </div>
        </div>
    )
}

export default MyTrips;