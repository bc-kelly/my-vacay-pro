import React, {useState} from "react";
import HotelCard from './HotelCard';
import SeeDetailsBtn from './SeeDetailsBtn';
import AddToMyTripsBtn from './AddToMyTripsBtn';
import './Browse.css';


function Browse({hotels, addHotelToTrip}) {

    const [searchText, setSearchText] = useState("");
    const filterAllHotels = hotels.filter(function (hotel) {
        return hotel.name.toLowerCase().includes(searchText.toLowerCase()) || hotel.city.toLowerCase().includes(searchText.toLowerCase()) || hotel.state.toLowerCase().includes(searchText.toLowerCase())
    })

    function handleSearchText (event) {
        console.log(event.target.value)
        setSearchText(event.target.value)
    }

    const showHotels = filterAllHotels.map((hotel) => {
        return (
            <div className="browse-card"> 
            <HotelCard key={hotel.id} hotel={hotel} />
            <SeeDetailsBtn hotel={hotel} />  
            <AddToMyTripsBtn hotel={hotel} addHotelToTrip={addHotelToTrip}/>  
            </div>
        )
    })

    // const hotelCard = hotels.map(hotel => {
    //     return ([
    //         <div className="browse-card"> 
    //     <HotelCard key={hotel.id} hotel={hotel} />
    //     <SeeDetailsBtn hotel={hotel} />  
    //     <AddToMyTripsBtn hotel={hotel} addHotelToTrip={addHotelToTrip}/>  
    //     </div>
    //     ])
    // })


    return (
        <div> 
            <div> 
                <input className="hotel-search" onChange={handleSearchText} value={searchText} id="search" type="text" placeholder="search by hotel name or location"></input>
            </div>
            <div className="browse-cards" > 
                {/* {hotels.length > 0? showHotels : <h1> Nothing Here </h1>} */}
                {showHotels}
                {/* {hotelCard} */}
                {/* <SeeDetailsBtn hotels={hotels} /> */}
            </div>
        </div>
    )
}

export default Browse;