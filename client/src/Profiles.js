import React from "react";
import ProfileCard from './ProfileCard'
import './Profiles.css';


function Profiles({profiles}) {

    const profileCard = profiles.map(profile => {
        console.log(profile)
        return <ProfileCard key={profile.id} profile={profile} />
    })

    return (
      
            <div className="profile" > 
                
                {profileCard}
            </div>
      

    )
}

export default Profiles;