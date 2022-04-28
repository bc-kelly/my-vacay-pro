import React from "react";
import HotelCard from './HotelCard'


function Browse({hotels, addHotelToTrip}) {

    const hotelCard = hotels.map(hotel => {
        return <HotelCard key={hotel.id} hotel={hotel} addHotelToTrip={addHotelToTrip} />
    })

    
    return (
        <div  > 
            {hotelCard}
        </div>
    )
}

export default Browse;