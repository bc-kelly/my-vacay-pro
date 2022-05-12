import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import './TripCard.css'



function TripCard( {trip}) {
    const [show,setShow]=useState(true)
    const params = useParams();
    const tripsAPI = '/trips';
    const [selectTrip, setSelectTrips] = useState(null);
    // const [isBooked, setIsBooked] = useState(false);

    // const toggleIsBooked = () => {
    //     setIsBooked(current = !current);
    // }

    // useEffect(() => {
    //     console.log('isBooked is: ', isBooked)
    // }, [isBooked]);

    // const submit = (trip) => {
    //     fetch(`${tripsAPI}/${trip.id}`, {
    //       method: 'PATCH',
    //       headers: {
    //        'Content-type': 'application/json',
    //      },
    //       body: JSON.stringify(selectTrip)
    //      })
    //      .then((response) => { 
    //     if (response.ok) {
    //         console.log('edit trip success')
    //         response.json().then((json) => console.log(json)); 
    //     } else {
    //         console.log('edit trip fail')
    //     }
    //   });
      
    // }

    return (
        <div className="trip-card" > 
            <h3 className="profile-name" > {trip.profile.name} </h3>
            <h3> {trip.name} </h3>
            <h3> {trip.hotel.name} </h3>
            <h3> {trip.hotel.city_state} </h3>
            <h3> Start date: {trip.date_start} </h3>
            <h3> End Date: {trip.date_end} </h3>
            {/* <h3> {trip.points} </h3> */}
            {/* <h3> {trip.booked} </h3> */}
            {/* <form  onClick={submit} >
                <div> 
                    <button onClick={toggleIsBooked}> Toggle loading state</button>
                    {isBooked && <h2> Loading... </h2>}
                
                </div>
            </form> */}
            {/* <div>
                <input type="checkbox"  > </input>
            </div>  */}
          
                {/* <button onClick={()=>submit(trip)} className="draft-btn">  */}
                    {/* {trip.booked ? <h1>draft</h1> : <h1>booked</h1>} */}
                    {/* <h1>{trip.booked} </h1> */}
                {/* { show ? <h1 className="booked" >booked!</h1> : <h1 className="draft" >draft</h1>} 
                </button>  */}
                <button onClick={()=>setShow(!show)} className="draft-btn"> { show ? <h1 className="draft" >draft</h1> : <h1 className="booked" >booked!</h1>} </button>
        
        </div>
    )
}

export default TripCard;