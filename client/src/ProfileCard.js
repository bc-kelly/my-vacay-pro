import React from "react";
import './ProfileCard.css';
// import { Link } from "react-router-dom";

function ProfileCard({profile}) {

    // function clickOnCard() {

    // }

    return (
        <div className="profile-card" > 
            <img className="profile-image" src={profile.image} alt={profile.name}/>
            <h3> {profile.name} </h3>
            {/* <div > 
                <button className='edit'> 
                    <Link to={`/editprofile/${profile.id}`}> edit profile </Link>
                </button>
            </div> */}
        </div>

    )
}

export default ProfileCard;