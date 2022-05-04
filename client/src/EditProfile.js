import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import ProfileCard from "./ProfileCard";

function EditProfile( ) {
    const params = useParams();
    const profilesAPI = '/profiles'
    const [profile, setProfile] = useState(null)

    useEffect(()=>{
        fetch(profilesAPI)
        .then(resp => resp.json())
        .then(profilesData => {
          console.log(profilesData)
          setProfile(profilesData)
        })
      }, [])

      const submit = () => {
        fetch(`${profilesAPI}/${params.id}`, {
          method: 'PATCH',
          headers: {
           'Content-type': 'application/json; charset=UTF-8',
         },
          body: JSON.stringify(profile)
         })
          .then((response) => response.json())
          .then((json) => console.log(json));
      }

      if(!profile) return null;
    return (
        <div> 
            <div>
                <ProfileCard profile={profile} />
                
                <div> 
                    <form onSubmit={submit} >
                        <div>
                            <label htmlFor="name">Name</label>
                            <input 
                                id="name" 
                                type="text" 
                                placeholder="Profile Name"
                                value={profile.name}
                                onChange={(e) =>  setProfile({ ...profile, name: e.target.value})}
                            />
                        </div>
                        <input type="submit" value="Edit Profile" />
                    </form>
                </div>
            </div>
          
        </div>

    )
}

export default EditProfile;