import React, { useState } from 'react'
import "./Content.css"
import flightData from './FlightJson'
import middle from "../Asset/middle.jpg"
import ad from "../Asset/advertising.avif"
import { useNavigate } from 'react-router-dom'
const Content = () => {
  const Navigate=useNavigate();
  const handleDetails=()=>{
    Navigate("/flightDetails")
  }
  
  const [selecttrip, setselecttrip] = useState('oneWay');

  const handleTripTypeChange = (event) => {
    setselecttrip(event.target.value);
  };

  const oneWay = flightData.filter((flight) => flight.tripType === 'oneWay');
  const roundTrip = flightData.filter((flight) => flight.tripType === 'roundTrip');

  return (
    <div style={{height:"1000px"}}>
    <div className='dashboard-Container'>
        <div style={{display:"flex",justifyContent:"center",}}>
            <h4 style={{marginTop:"20px",color:"white"}}>Domestic and International Flights</h4>
             </div>
             {/*ticket container  */}
<div className='ticketBook-Container'>
<div>
      <div style={{marginTop:"20px",display:"flex",marginLeft:"20px",width:"400px",justifyContent:"space-between"}}>
        <label>
          <input
            type="radio"
            value="oneWay"
            checked={selecttrip === 'oneWay'}
            onChange={handleTripTypeChange}
          />
          One Way
        </label>
        <label>
          <input
            type="radio"
            value="roundTrip"
            checked={selecttrip === 'roundTrip'}
            onChange={handleTripTypeChange}
          />
          Round Trip
        </label>
        <label>
          <input
            type="radio"
            value="multiCity"
            checked={selecttrip === 'multiCity'}
            onChange={handleTripTypeChange}
          />
          Multi-City
        </label>
        </div>
        {selecttrip === 'oneWay' && (
        <div style={{display:"flex",}}>
          <div >
            {oneWay.map((flight) => (
              <div key={flight.id} style={{display:"flex",justifyContent:"space-around",width:"900px",marginTop:"20px"}}>

             <div style={{display:"flex",flexDirection:"column"}}> 
             <p>From</p>
             <div className='selectButton'>  {flight.from}</div></div> 
            <div>  <p>To</p> <div  className='selectButton'> {flight.to} </div></div>
             <div>  <p>Departure</p> <div  className='selectButtonsmall'>{flight.departureDate}</div> </div>
              <div>  <p>Return</p> <div  className='selectButtonsmall'><input type='date' style={{height:"43px",border:"none"}}/></div></div>
              <div>  <p>Traveller</p> <div  className='selectButtonsmall'>
                <select style={{height:"43px",border:"none",width:"150px"}}>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
                 </div></div>
              </div>
              
            ))}
          </div>
        </div>
      
      )}
    
        {selecttrip === 'roundTrip' && (
            <div style={{display:"flex",}}>
            <div >
              {roundTrip.map((flight) => (
                <div key={flight.id} style={{display:"flex",justifyContent:"space-around",width:"900px",marginTop:"20px"}}>
  
               <div style={{display:"flex",flexDirection:"column"}}> 
               <p>From</p>
               <div className='selectButton'>  {flight.from}</div></div> 
              <div>  <p>To</p> <div  className='selectButton'> {flight.to} </div></div>
               <div>  <p>Departure</p> <div  className='selectButtonsmall'>{flight.departureDate}</div> </div>
                <div>  <p>Return</p> <div  className='selectButtonsmall'>{flight.returnDate}</div></div>
                <div> <p>Traveller</p> <div  className='selectButtonsmall'>
                  <select style={{height:"43px",border:"none",width:"150px"}}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </select>
                   </div></div>
                </div>
                
              ))}
            </div>
          </div>
            )}
      
      </div>
     <div style={{display:"flex",width:900,justifyContent:"center",marginTop:"20%"}}><button style={{border:"none",border:"1px solid blue",width:"200px",height:"40px",borderRadius:"10px",backgroundColor:"orangered",color:"white",marginLeft:"40px"}}  onClick={handleDetails}> Search Flights</button></div> 
</div>
{/*  */}

<div style={{marginTop:"35%",width:"100vw",display:"flex",justifyContent:"center"}}>
  <img src={middle} style={{width:"1000px",borderRadius:"10px"}}/>
 </div>
 
 <div style={{marginTop:"10px",width:"100vw",}}>
 <div style={{display:"flex",flexDirection:"column", justifyContent:"center",marginLeft:"5%"}}>
     <h4 style={{marginLeft:"45%"}}>Offers For You</h4>
  <img src={ad} style={{width:"1200px",borderRadius:"10px"}}/>
 
 </div>
  </div>
 </div>
 </div> 
  )
}

export default Content