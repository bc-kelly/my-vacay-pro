import React, {useState, useEffect} from "react";
import ProfileCard from './ProfileCard'
import './Profiles.css';

const profilesAPI = '/profiles';

function Profiles() {
    const [profiles, setProfiles] = useState([]);

    useEffect(()=>{
        fetch(profilesAPI)
        .then(resp => resp.json())
        .then(profilesData => {
          // console.log(profilesData)
          setProfiles(profilesData)
        })
      }, []) 

    // const [formData, setFormData] = useState ({
    //     profile_id: "",
    // });

    // function handleChange(event) {
    //     setFormData({
    //         ...formData,
    //         [event.target.name]: event.target.value,
    //     });
    // }

    const profileCard = profiles.map(profile => {
        // console.log(profile)
        return <ProfileCard key={profile.id} profile={profile} />
    })

    return (
      <div>
          {/* <form className="select-profile" > 
          <label className="profile-dropdown" >
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
          </form> */}
            <div className="profile" >   
                {/* {profileCard} */}
                {profiles.length > 0 ? profileCard : <h1> Please create a profile </h1>}
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