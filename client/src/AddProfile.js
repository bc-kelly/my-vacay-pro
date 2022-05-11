import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { BsFillFilePersonFill } from "react-icons/bs";
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
        //  navigate("/profiles");
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
                                <option value="0"> Select a profile icon </option>
                                <option value="https://i.pinimg.com/originals/fd/b6/de/fdb6dea1b13458837c6e56361d2c2771.jpg"> orange </option>
                                <option value="https://i.pinimg.com/originals/1c/c5/35/1cc535901e32f18db87fa5e340a18aff.jpg"> green </option>
                                {/* <option value="https://static.more.com/wp-content/uploads/2016/11/10202508/hero_kimpossible_0-2-820x400.jpg"> kim possible </option> */}
                                <option value="https://i.pinimg.com/originals/99/a8/3e/99a83e22b4c160d36e1697b4139c803f.jpg"> yellow </option>
                                <option value="https://i.pinimg.com/736x/7c/ee/6f/7cee6fa507169843e3430a90dd5377d4.jpg"> purple </option>
                                <option value="https://i.pinimg.com/originals/bd/70/22/bd702201a2b6d8960734f60f34a22754.jpg"> pink </option>
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