import React from "react";
import './TripCard.css'

function TripCard( {trip}) {
    return (
        <div className="trip-card" > 
            <h3 className="profile-name" > {trip.profile.name} </h3>
            <h3> {trip.name} </h3>
            <h3> {trip.hotel.name} </h3>
            <h3> {trip.hotel.city_state} </h3>

            {/* <h3> {trip.location} </h3> */}
            <h3> Start date: {trip.date_start} </h3>
            <h3> End Date: {trip.date_end} </h3>
            <h3> {trip.points} </h3>
            <h3> {trip.booked} </h3>
        </div>

    )
}

export default TripCard;