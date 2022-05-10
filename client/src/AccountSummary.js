import React, {useEffect, useState} from "react";
import ProfileCard from './ProfileCard'
// import HotelCard from './HotelCard'
import TripCard from './TripCard'
import SendEmailBtn from './SendEmailBtn'
import './AccountSummary.css';

const tripsAPI = '/trips';
const profilesAPI = '/profiles';

function AccountSummary({ hotelTrip}) {
    const [trips, setTrips] = useState([]);
    const [profiles, setProfiles] = useState([]);

    useEffect(()=>{
        fetch(profilesAPI)
        .then(resp => resp.json())
        .then(profilesData => {
          // console.log(profilesData)
          setProfiles(profilesData)
        })
      }, []) 

    const profileCard = profiles.map(profile => {
        // console.log(profile)
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

    useEffect(()=>{
        fetch(tripsAPI)
        .then(resp => resp.json())
        .then(tripsData => {
        //   console.log(tripsData)
          setTrips(tripsData)
        })
      }, [])

    const tripCard = trips.map(trip => {
        console.log(trip.points)
        return (
        <div> 
            <TripCard key={trip.id} trip={trip} />
        </div>
        )
    })

    return (
        <div> 
           
            <div className="points-summary"> 
                Points Summary: XXX
            </div>
            <div > 
                <SendEmailBtn />
            </div>
                <div className="account-summary" > 
                    An overview of your account:
                </div>

                <div className="account-summary-card" > 
                    {profileCard}
                </div>

                <div className="show-trips-header" > Saved trips: </div>

                <div className="account-summary-trip-card" > 
                    {/* {showAddedHotel} */}
                    {tripCard}
                    {/* {trips} */}
                </div>

        </div>
    )
}

export default AccountSummary;