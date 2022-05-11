import React, {useState, useEffect} from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import LogoPage from "./LogoPage";
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
import SendEmail from "./SendEmail";
// import Swal from 'sweetalert2'
import './App.css';

const hotelsAPI = '/hotels';
// const profilesAPI = '/profiles';
const tripsAPI = '/trips';

function App() {

  const Swal = require('sweetalert2')
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
        Swal.fire({
          title: 'Added!',
          // text: 'Do you want to continue',
          icon: 'success',
          timer: 1500,
          confirmButtonText: 'Cool',
          showConfirmButton: false
        }).then(
          function () {},
          // handling the promise rejection
          function (dismiss) {
            if (dismiss === 'timer') {
              //console.log('I was closed by the timer')
            }
          }
        )
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
      <div className="content-wrap">  
        <div> 
          <button className="logout-btn" onClick = {handleLogoutClick} > Logout </button>
          {/* <div className="logo">
                <iframe loading="lazy" className="next-logo"
                  src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFAavqqFU4&#x2F;view?embed" allowfullscreen="allowfullscreen" allow="fullscreen">
                </iframe>
              </div>
              <a href="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFAavqqFU4&#x2F;view?utm_content=DAFAavqqFU4&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link" target="_blank" rel="noopener">Summer Travel logo,palm tree and plane logo</a> by Bridget Kelly */}
          </div>
        {/* <div> Welcome {account.username} </div> */}
        <NavBar />
            <Routes>
                  <Route exact path ="/" element= { <LogoPage /> } /> 
                  <Route path ="/home" element= { <Home setUser={setUser} /> } /> 
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
                  <Route path ="/sendemail" element= { <SendEmail /> } />
            </Routes>
            {/* <div class="diagonal-box">
              <div class="content"> ... </div>
            </div> */}
      </div>
        <footer class="footer"> Vacation Pro, plan those group trips </footer>
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
