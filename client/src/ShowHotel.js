import React, {useState, useEffect} from "react";
import HotelCard from './HotelCard'
import AddToMyTripsBtn from './AddToMyTripsBtn';
import {useParams} from "react-router-dom";
import './ShowHotel.css'

function ShowHotel({addHotelToTrip}) {
    const params = useParams();

    const hotelsAPI = '/hotels';
    const [hotel, setHotel] = useState(null);
  
    useEffect(()=>{
        fetch(`${hotelsAPI}/${params.id}`)
        .then(resp => resp.json())
        .then(hotelsData => {
          // console.log(hotelsData)
          setHotel(hotelsData)
        })
      }, [])

      if (!hotel) return null;
    return (
        <div className="show-hotel-card" > 
          
            <HotelCard hotel={hotel} />
            <AddToMyTripsBtn hotel={hotel} addHotelToTrip={addHotelToTrip} />
        </div>
    )
}

export default ShowHotel;