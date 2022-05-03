import React, { useState }from "react";

const tripsAPI = '/trips';

function MyTripsForm( {hotels, profiles}) {

    const [trips, setTrips] = useState([]);
    // const [formData, setFormData] = useState ({
    //     name: "",
    //     location: "",
    //     date_start: "",
    //     date_end: "",
    //     profile_id: "",
    //     hotel_id: ""
    // });



    // function handleChange(event) {
    //     setFormData({
    //         ...formData,
    //         [event.target.name]: event.target.value,
    //     });
    // }

    function handleNewTrip(trip){
        fetch(tripsAPI, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(trip),
        })

        .then(response => response.json())
        // .then((newTrip) => handleAddReview(newReview))
        .then(json => {
        setTrips([...trips, json])
        console.log(json)
        })
        .catch(err => console.error(err))
    }

    function handleTripFormSubmit(event){ 
        event.preventDefault()
        
        const name = event.target['name'].value
        const location = event.target['location'].value
        const date_start = event.target['date_start'].value
        const date_end = event.target['date_end'].value
        const profile_id = event.target['profile_id'].value
        const hotel_id = event.target['hotel_id'].value

        const newTrip = {
            name: name,
            location: location,
            date_start: date_start,
            date_end: date_end,
            profile_id: profile_id,
            hotel_id: hotel_id
        };
        
        handleNewTrip(newTrip);
        console.log(newTrip)
        // navigate("./profiles");
        // event.target.reset();
    }


    return (
        <div > 
            <form onSubmit= {handleTripFormSubmit}>
                    <div >
                        <label htmlFor="name">Name</label>
                        <input id="name" type="text" placeholder="Trip Name" />
                    </div>

                    <div>
                        <label htmlFor="location">Location</label>
                        <input id="location" type="text" placeholder="Trip Location" />
                    </div>

                    <div>
                        <label htmlFor="date_start">Start Date</label>
                        <input id="date_start" type="text" placeholder="Start date" />
                    </div>

                    <div>
                        <label htmlFor="date_end">End Date</label>
                        <input id="date_end" type="text" placeholder="End date" />
                    </div>

                    <div>
                        <label htmlFor="profile_id">Profile</label>
                        
                        <input id="profile_id" type="text" placeholder="profile_id" />
                    </div>

                    <div>
                        <label htmlFor="hotel_id">Hotel</label>
                        <input id="hotel_id" type="text" placeholder="hotel_id" />
                    </div>
                    
                    <input type="submit" value="Save" />
            </form>
       
        </div>

    )
}

export default MyTripsForm;