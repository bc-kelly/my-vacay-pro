import React from "react";
import { Link } from "react-router-dom";
import './SendEmailBtn.css'

function SendEmailBtn( ) {
    
    return (
        <div> 
            <button className="invite-btn" > 
                <Link to={'/sendemail'}> Invite a friend to join your account</Link>
            </button>
        </div>
    )
}

export default SendEmailBtn;