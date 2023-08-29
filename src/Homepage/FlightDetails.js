import React, { useState } from 'react';
import flightData from './FlightJson';
import { useNavigate } from 'react-router-dom';

const FlightDetails = () => {
  const [selectedFlight, setSelectedFlight] = useState(null);
const Navigate=useNavigate()

  const mapflights = {};

  flightData.forEach(flight => {
    if (flight.flightname && Array.isArray(flight.flightname)) {
      flight.flightname.forEach(({ name, price, time,description }) => {
        if (!mapflights[name]) {
          mapflights[name] = [];
        }
        mapflights[name].push({ price, time });
      });
    }
  });

  const handleSeeDetails = (flightName) => {
    setSelectedFlight(flightName);
  };
 const handleReviewTicket=()=>{
    Navigate("/review")
 }
  return (
    <div  style={{height:"800px",justifyContent:"space-evenly"}}>
      {Object.keys(mapflights).map(flightName => (
        <div key={flightName} style={{ backgroundColor: "whitesmoke" }}>
          <h3>{flightName}</h3>
          <div>
            {mapflights[flightName].map((flightInfo, index) => (
              <div key={index} style={{ display: "flex" }}>
                <div style={{ height: "50px", width: "200px" }}>Price: {flightInfo.price}</div>
                <div>Time: {flightInfo.time}</div>
              </div>
            ))}
            <button onClick={() => handleSeeDetails(flightName)}>See Details</button>
            {selectedFlight === flightName && (
              <div style={{display:"flex"}}>
                <div style={{display:'flex',flexDirection:"column"}}><p>Additional details about {flightName} flight.</p>
                <p> All departure/arrival times are in local time</p></div>
               <div style={{width:"100px",border:"1px solid blue ",height:"40px"}} onClick={handleReviewTicket}>Book Ticket</div>
              </div>
               
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FlightDetails;
