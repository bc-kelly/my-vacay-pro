import React from "react";
import './ProfileCard.css';

function ProfileCard({profile}) {
    return (
        <div className="profile-card" > 
            <img src={profile.image} alt={profile.name}/>
            <h3> {profile.name} </h3>
        </div>

    )
}

export default ProfileCard;