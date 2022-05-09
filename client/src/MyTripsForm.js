import React, { useState }from "react";
import './MyTripsForm.css'

const tripsAPI = '/trips';

function MyTripsForm( {hotels, profiles, hotel}) {

    // let tripBooked = document.querySelector('#booked')

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
        const hotel_id = hotel.hotel_id
        // const hotel_id = event.target['hotel_id'].value
        

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

  

// console.log(hotel.id)
    return (
        <div > 
            <form className="form" onSubmit= {handleTripFormSubmit}>
                <div className="div-container">
                    <div className="div-one">  
                        <div className="form-rows" >
                            <label htmlFor="name"> </label>
                            <input className="trip-form-input"  id="trip-txt-input" type="text" placeholder="Trip Name" />
                        </div>

                        <div className="form-rows" >
                            <label htmlFor="date_start"></label>
                            <input className="trip-form-input" id="trip-txt-input" type="date" placeholder="MM/DD/YYYY" />
                        </div>

                        <div className="form-rows" >
                            <label htmlFor="date_end"></label>
                            <input className="trip-form-input" id="trip-txt-input" type="date" placeholder="MM/DD/YYYY" />
                        </div>
                    </div>
                    <div className="div-two">
                        <div className="form-rows" >
                            <label htmlFor="location"></label>
                            <input className="trip-form-input" id="trip-txt-input" type="text" placeholder="Trip Location" />
                        </div> 

                        <div className="form-rows" >
                            <label htmlFor="profile_id"></label>
                            <input className="trip-form-input" id="trip-txt-input" type="text" placeholder="profile_id" />
                        </div>

                        <div className="form-rows" >
                            <label htmlFor="hotel_id"></label>
                            
                            <input readonly value={hotel.id} className="trip-form-input" id="trip-txt-input"type="text" placeholder="hotel_id" />
                        </div>
                    </div>
                </div>
                    <input type="submit" value="Save" className="save-btn" />
            </form>
                    {/* <div>
                        <button className="see-details" 
                        // id="booked" onClick={changeBooked} 
                        > 
                            draft
                        </button>
                    </div> */}
        </div>
    )
}

export default MyTripsForm;