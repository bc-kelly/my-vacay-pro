import React from "react";
import './SeeDetailsBtn.css'


function AddToMyTripsBtn({addHotelToTrip, hotel}) {
    return (
        <div > 
            <button className='see-details-btn' onClick={()=>addHotelToTrip(hotel)}> 
                    add to my trips 
            </button>
        </div>

    )
}

export default AddToMyTripsBtn;