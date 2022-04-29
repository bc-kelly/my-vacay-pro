import React, {useState, useEffect} from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Browse from "./Browse";
import AccountSummary from "./AccountSummary";
import Profiles from "./Profiles";
import MyTrips from "./MyTrips";
import ShowHotel from "./ShowHotel";
import Login from "./Login";
import './App.css';

const hotelsAPI = '/hotels';
const profilesAPI = '/profiles';

function App() {

  const [user, setUser] = useState(null);
  // console.log(`is ${setUser}`)
  const [hotels, setHotels] = useState([]);
  const [profiles, setProfiles] = useState([]);
  const [hotelTrip, setHotelTrip] = useState([]);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
        
      }
    });
  }, []);


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
                <Route exact path ="/" element= { <Home setUser={setUser} /> } /> 
                <Route path ="/browse" element= { <Browse hotels={hotels} addHotelToTrip={addHotelToTrip} /> } /> 
                <Route path ="/accountsummary" element= { <AccountSummary /> } />
                <Route path ="/profiles" element= { <Profiles profiles={profiles} /> } /> 
                <Route path ="/mytrips" element= { <MyTrips hotels={hotels} hotelTrip={hotelTrip} /> } /> 
                <Route path ="/showhotel/:id" element= { <ShowHotel addHotelToTrip={addHotelToTrip} /> } />
                <Route path ="/login" element= { <Login setUser={setUser} /> } />
          </Routes>
    </div>
  );
}

export default App;
