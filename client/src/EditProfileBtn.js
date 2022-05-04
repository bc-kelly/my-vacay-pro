import React from "react";
import { Link } from "react-router-dom";


function EditProfileBtn( {profile} ) {
    return (
        <div  > 
            <button> 
                edit your profile
                <Link to={`/editprofile/${profile.id}`}> see details </Link>
            </button>
          
        </div>

    )
}

export default EditProfileBtn;