import React, {useState, useEffect} from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Browse from "./Browse";
import AccountSummary from "./AccountSummary";
import Profiles from "./Profiles";
import MyTrips from "./MyTrips";
import ShowHotel from "./ShowHotel";
import './App.css';

const hotelsAPI = '/hotels';
const profilesAPI = '/profiles';

function App() {

  const [hotels, setHotels] = useState([]);
  const [profiles, setProfiles] = useState([]);
  const [hotelTrip, setHotelTrip] = useState([]);


  useEffect(()=>{
      fetch(hotelsAPI)
      .then(resp => resp.json())
      .then(hotelsData => {
        // console.log(hotelsData)
        setHotels(hotelsData)
      })
    }, [])

    useEffect(()=>{
      fetch(profilesAPI)
      .then(resp => resp.json())
      .then(profilesData => {
        // console.log(profilesData)
        setProfiles(profilesData)
      })
    }, [])


//adding hotel to my trips from browse page
    function addHotelToTrip(item) {
        if (!hotelTrip.includes(item)) {
            setHotelTrip([...hotelTrip, item])
        }
    }


  return (
    <div className="App">
     hello from app
     <NavBar />
          <Routes>
                <Route exact path ="/" element= { <Home /> } /> 
                <Route path ="/browse" element= { <Browse hotels={hotels} addHotelToTrip={addHotelToTrip} /> } /> 
                <Route path ="/accountsummary" element= { <AccountSummary /> } />
                <Route path ="/profiles" element= { <Profiles profiles={profiles} /> } /> 
                <Route path ="/mytrips" element= { <MyTrips hotels={hotels} hotelTrip={hotelTrip} /> } /> 
                <Route path ="/showhotel/:id" element= { <ShowHotel /> } />
          </Routes>
    </div>
  );
}

export default App;
