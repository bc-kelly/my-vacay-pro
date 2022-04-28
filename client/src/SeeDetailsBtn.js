import React from "react";

function SeeDetailsBtn({hotels, hotel}) {
    
    return (
        <div> 
            <button className="see-details" > 
                <a href={`http://localhost:4000/showhotel/${hotel.id}`}> see details </a> 
            </button>
        </div>
    )
}

export default SeeDetailsBtn;