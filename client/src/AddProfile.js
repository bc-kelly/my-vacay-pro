import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import './AddProfile.css';

const profilesAPI = '/profiles';

function AddProfile( ) {

    // let navigate = useNavigate();
    const [profiles, setProfiles] = useState([]);
    // const imageOne = ("https://image.pngaaa.com/975/4080975-middle.png")

    function handleChange(event) {
        setProfiles({
            ...profiles,
            [event.target.image]: event.target.value,
        });
    }

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

        const newProfile = {
            name: name,
            image: image,
        };
        
        handleNewProfile(newProfile);
        console.log(newProfile)
        // navigate("http://localhost:4000/profiles");
        event.target.reset();
    }

    return (
        <div className="add-form" > 
            <div className="create-header" >Create Your Own Profile </div>
            <form onSubmit= {handleFormSubmit}>
                    <div >
                        <label htmlFor="name"> </label>
                        <input className="form-input" id="name" type="text" placeholder="Profile Name" />
                    </div>

                    <div className="image-div" >
                        <label htmlFor="image"> </label>
                        {/* <input className="form-input" id="image" type="text" placeholder="Profile Image" /> */}
                            <select
                                className="image-form-input"
                                type="text"
                                name="image"
                                value={profiles.image}
                                onChange={handleChange}
                            >
                                <option value="0"> Select a profile image </option>
                                <option value="https://images-na.ssl-images-amazon.com/images/S/pv-target-images/1d06a6bf1aefd96f5367d90923639ba156dd3f5f6452d0fdeaa6370d3fa025d2._SX1080_.jpg"> hey arnold </option>
                                <option value="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAs_TDUTeHiZQ1tqLJlvItaBOjcmRTeoSbHw&usqp=CAU"> shrek </option>
                                {/* <option value="https://static.more.com/wp-content/uploads/2016/11/10202508/hero_kimpossible_0-2-820x400.jpg"> kim possible </option> */}
                                <option value="https://cdn.costumewall.com/wp-content/uploads/2017/02/kim-possible.jpg"> kim possible </option>
                                <option value="https://wallpapercave.com/wp/wp2616606.jpg"> bart </option>
                                <option value="https://www.kindpng.com/picc/m/432-4326499_the-resemblance-is-uncanny-handsome-squidward-png-transparent.png"> handsome squidward </option>
                            </select>
                    </div>

                    {/* <div  className="form-rows">
                        <label htmlFor="account_id"> </label>
                        <input className="form-control" id="account_id" type="text" placeholder="account_id" />
                    </div> */}
                    
                    <input className="add-profile-btn" type="submit" value="Add Profile" />
            </form>
        </div>

    )
}

export default AddProfile;