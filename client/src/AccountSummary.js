import React from "react";
import ProfileCard from './ProfileCard'
import HotelCard from './HotelCard'
import './AccountSummary.css';


function AccountSummary({profiles, hotelTrip}) {

    const profileCard = profiles.map(profile => {
        console.log(profile)
        return <ProfileCard key={profile.id} profile={profile} />
    })

    const showAddedHotel = hotelTrip.map((addedHotel) => {
        return (
            <div className="trip-card" > 
            <HotelCard 
            key={addedHotel.id} 
            hotel={addedHotel}
            />
        </div>
        )
    })


    return (
        <div> 
            <div className="points-summary"> Points Summary: XXX </div>
            <div className="account-summary" > 
                An overview of your account:
            </div>
            <div className="account-summary-card" > 
            {profileCard}
            </div>
            <div > 
            {showAddedHotel}
            </div>
        </div>

    )
}

export default AccountSummary;