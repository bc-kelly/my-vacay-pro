import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import './AddProfile.css';

const profilesAPI = '/profiles';

function AddProfile( ) {

    // let navigate = useNavigate();
    const [profiles, setProfiles] = useState([]);

    function handleNewProfile(profile){
        fetch(profilesAPI, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(profile),
        })
        .then(response => response.json())
        .then(json => {
        setProfiles([...profiles, json])
        // console.log(json)
        })
        .catch(err => console.error(err))
    }

    function handleFormSubmit(event){
       
        event.preventDefault()
        
        const name = event.target['name'].value
        const image = event.target['image'].value
        // const account_id = event.target['account_id'].value

        const newProfile = {
            name: name,
            image: image,
            // account_id: account_id
        };
        
        handleNewProfile(newProfile);
        console.log(newProfile)
        // navigate("./profiles");
        event.target.reset();
    }

    return (
        <div className="add-form" > 
            <div className="create-header" >Create Your Own Profile </div>
            <form onSubmit= {handleFormSubmit}>
                    <div className="form-rows" >
                        <label htmlFor="name"> </label>
                        <input className="form-control" id="name" type="text" placeholder="Profile Name" />
                    </div>

                    <div  className="form-rows">
                        <label htmlFor="image"> </label>
                        <input className="form-control" id="image" type="text" placeholder="Profile Image" />
                    </div>

                    {/* <div  className="form-rows">
                        <label htmlFor="account_id"> </label>
                        <input className="form-control" id="account_id" type="text" placeholder="account_id" />
                    </div> */}
                    
                    <input className="see-details" type="submit" value="Add Profile" />
            </form>
        </div>

    )
}

export default AddProfile;