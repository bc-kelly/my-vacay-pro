import React, {useState, useEffect} from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Browse from "./Browse";
import AccountSummary from "./AccountSummary";
import Profiles from "./Profiles";
import MyTrips from "./MyTrips";
import ShowHotel from "./ShowHotel";
import Login from "./Login";
import AddProfile from "./AddProfile";
import MyTripsForm from "./MyTripsForm";
import EditProfile from "./EditProfile";
import './App.css';

const hotelsAPI = '/hotels';
// const profilesAPI = '/profiles';
const tripsAPI = '/trips';

function App() {

  let navigate = useNavigate();
  const [user, setUser] = useState(null);
  // console.log(`is ${setUser}`)
  const [hotels, setHotels] = useState([]);
  // const [profiles, setProfiles] = useState([]);
  const [trips, setTrips] = useState([]);
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

    // useEffect(()=>{
    //   fetch(profilesAPI)
    //   .then(resp => resp.json())
    //   .then(profilesData => {
    //     console.log(profilesData)
    //     setProfiles(profilesData)
    //   })
    // }, [])
    //move to profiles component ,same with the trips fetch 

    useEffect(()=>{
      fetch(tripsAPI)
      .then(resp => resp.json())
      .then(tripsData => {
        // console.log(tripsData)
        setTrips(tripsData)
      })
    }, [])


//adding hotel to my trips from browse page
    function addHotelToTrip(item) {
        if (!hotelTrip.includes(item)) {
            setHotelTrip([...hotelTrip, item])
        }
    }

    function handleLogoutClick() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
          if (r.ok) {
            setUser(null);
            navigate("/");
            console.log('logout success')
          alert (`Goodbye`)
          }
        });
      }

// console.log(profiles)
  return (
    <div className="App">
      <button className="logout-btn" onClick = {handleLogoutClick} > Logout </button>
     <NavBar />
          <Routes>
                <Route exact path ="/" element= { <Home setUser={setUser} /> } /> 
                <Route path ="/browse" element= { <Browse hotels={hotels} addHotelToTrip={addHotelToTrip} /> } /> 
                <Route path ="/accountsummary" element= { <AccountSummary 
                // profiles={profiles} 
                hotelTrip={hotelTrip} trips={trips} /> } />
                <Route path ="/profiles" element= { <Profiles /> } /> 
                <Route path ="/mytrips" element= { <MyTrips trips={trips} hotels={hotels} hotelTrip={hotelTrip} /> } /> 
                <Route path ="/showhotel/:id" element= { <ShowHotel addHotelToTrip={addHotelToTrip} /> } />
                <Route path ="/login" element= { <Login setUser={setUser} /> } />
                <Route path ="/addprofile" element= { <AddProfile /> } />
                <Route path ="/mytripsform" element= { <MyTripsForm hotels={hotels} 
                // profiles={profiles} 
                /> } />
                <Route path ="/editprofile/:id" element= { <EditProfile /> } />
          </Routes>
    </div>
  );
}

export default App;

// useEffect(()=>{
//   fetch(hotelsAPI)
//   .then(resp => resp.json())
//   .then(hotelsData => {
//     // console.log(hotelsData)
//     if(typeof(hotelsData) === 'object'){
//       return;
//     }else{
//       setHotels(hotelsData)
//     }
//   })
// }, [])
