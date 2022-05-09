import React, {useEffect, useState} from "react";
import HotelCard from './HotelCard'
import TripCard from './TripCard'
import MyTripsForm from './MyTripsForm'
import './MyTrips.css'

const tripsAPI = './trips'

function MyTrips({hotelTrip}) {
    const [trips, setTrips] = useState([]);

    useEffect(()=>{
        fetch(tripsAPI)
        .then(resp => resp.json())
        .then(tripsData => {
        //   console.log(tripsData)
          setTrips(tripsData)
        })
      }, [])


    const tripCard = trips.map(trip => {
        // console.log(trips)
        return (
        <div> 
            <TripCard key={trip.id} trip={trip} />
        </div>
        )
    })

    const showAddedHotel = hotelTrip.map((addedHotel) => {
        return (
            <div className="trip-card" > 
            <HotelCard 
            key={addedHotel.id} 
            hotel={addedHotel}
            />
            <MyTripsForm 
            key={addedHotel.id} 
            hotel={addedHotel} />
        </div>
        )
    })

    return (
        <div > 
            <div className="cards-temp-added" > 
                {showAddedHotel}
            </div>
            <div className="page-divider" > </div>
        <div className="trips-section" > 
           <div className="posted-trips" > saved trips: </div> 
            <div className="my-trips-trip-card"> 
                {tripCard}
            </div>
        </div>
        </div>
    )
}

export default MyTrips;