import React, {useState, useEffect} from "react";
import {useParams, useNavigate} from "react-router-dom";
import ProfileCard from "./ProfileCard";
import './EditProfile.css';

function EditProfile( ) {
    const params = useParams();
    const profilesAPI = '/profiles';
    const [profile, setProfile] = useState(null);
    let navigate = useNavigate();

    useEffect(()=>{
        fetch(`${profilesAPI}/${params.id}`)
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
         }).then((response) => { 
        if (response.ok) {
            navigate('/profiles');
            console.log('edit success')
            response.json().then((json) => console.log(json)); 
        } else {
            console.log('edit fail')
        }
      });
    }

      if(!profile) return null;
    return (
        <div> 
            <div className="container" >
                <div  className="edit-profile" >  <ProfileCard profile={profile} /> </div>
                
                <div className="edit-form" > 
                    <form onSubmit={submit} >
                        <div>
                            Change profile name:
                            <label htmlFor="name"> </label>
                            <input 
                                id="name" 
                                type="text" 
                                placeholder="Profile Name"
                                value={profile.name}
                                onChange={(e) =>  setProfile({ ...profile, name: e.target.value})}
                                className="input-part"
                            />
                        </div>
                        <input type="submit" value="Save" className="save-btn" />
                    </form>
                </div>
            </div>
          
        </div>

    )
}

export default EditProfile;

// const submit = () => {
//     fetch(`${profilesAPI}/${params.id}`, {
//       method: 'PATCH',
//       headers: {
//        'Content-type': 'application/json; charset=UTF-8',
//      },
//       body: JSON.stringify(profile)
//      })
//       .then((response) => response.json())
//       .then((json) => console.log(json));
     
//   }