import React, {useState, useEffect} from "react";
import HotelCard from './HotelCard'
import {useParams} from "react-router-dom";

function ShowHotel() {
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
        <div> 
            hotel details:
            <HotelCard hotel={hotel} />
        </div>

    )
}

export default ShowHotel;