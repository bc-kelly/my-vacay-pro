import React, {useState} from "react";
import ProfileCard from './ProfileCard'
import './Profiles.css';


function Profiles({profiles}) {
    const [formData, setFormData] = useState ({
        profile_id: "",
    });

    function handleChange(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    }

    const profileCard = profiles.map(profile => {
        // console.log(profile)
        return <ProfileCard key={profile.id} profile={profile} />
    })

    return (
      <div>
          <form className="select-profile" > 
          <label>
            Profile: 
            <select 
                type="text"
                name="profile_id"
                value={formData.profile_id}
                onChange={handleChange}
            >
                <option> Select a Profile </option>
                {profiles.map(profile => (
                    // console.log(house.location)
                    <option key={profile.id} value={profile.id}>
                        {profile.name}
                    </option>
                ))}     
            </select>
            </label>
          </form>
            <div className="profile" >   
                {profileCard}
            </div>

            <div> 
             <button className="add-btn"> 
             <a href={`/addprofile/`}> add a profile </a> 
             </button>
            </div>
        </div>
    )
}

export default Profiles;