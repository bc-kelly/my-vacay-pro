import React, {useEffect, useState} from "react";
import ProfileCard from './ProfileCard'
import HotelCard from './HotelCard'
import TripCard from './TripCard'
import './AccountSummary.css';

const tripsAPI = '/trips';

function AccountSummary({profiles, hotelTrip}) {
    const [trips, setTrips] = useState([]);

    const profileCard = profiles.map(profile => {
        console.log(profile)
        return <ProfileCard key={profile.id} profile={profile} />
    })

    // const showAddedHotel = hotelTrip.map((addedHotel) => {
    //     console.log(addedHotel)
    //     return (
    //         <div className="trip-card" > 
    //         <HotelCard 
    //         key={addedHotel.id} 
    //         hotel={addedHotel}
    //         />
    //     </div>
    //     )
    // })

    const tripCard = trips.map(trip => {
        console.log(trip)
        return (
        <div> 
            <TripCard key={trip.id} trip={trip} />
        </div>
        )
    })

      useEffect(()=>{
      fetch(tripsAPI)
      .then(resp => resp.json())
      .then(tripsData => {
        // console.log(profilesData)
        setTrips(tripsData)
      })
    }, [])


    return (
        <div> 
            <div className="points-summary"> 
                Points Summary: XXX 
            </div>
                <div className="account-summary" > 
                    An overview of your account:
                </div>
                <div className="account-summary-card" > 
                {profileCard}
                </div>
                <div > 
                    show posted trips here
                {/* {showAddedHotel} */}
                {tripCard}
                {/* {trips} */}
                </div>
        </div>

    )
}

export default AccountSummary;