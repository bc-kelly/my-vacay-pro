import React from "react";
import './LinkBtn.css'
import './SeeDetailsBtn.css'

function LinkBtn({hotel}) {
    return (
        <div > 
            <a href={hotel.link} target="_blank" className="link" > link to website</a>
        </div>

    )
}

export default LinkBtn;