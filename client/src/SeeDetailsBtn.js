import React from "react";
import { Link } from "react-router-dom";
import './SeeDetailsBtn.css'

function SeeDetailsBtn({hotels, hotel}) {
    
    return (
        <div> 
            <button className="see-details-btn" > 
                <Link to={`/showhotel/${hotel.id}`}> see details </Link>
            </button>
        </div>
    )
}

export default SeeDetailsBtn;