import React from "react";


function AddToMyTripsBtn({addHotelToTrip, hotel}) {
    return (
        <div > 
             <button className='see-details' onClick={()=>addHotelToTrip(hotel)}> 
                    add to my trips 
                </button>
        </div>

    )
}

export default AddToMyTripsBtn;