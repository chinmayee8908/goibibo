const flightData = [
    {
      "id": 1,
      "tripType": "oneWay",
      "flightname": [
        { "name": "Airasia", "price": "5000rs", "time": "14.3hr", "description": "Economy class" },
        { "name": "indigo", "price": "3000rs", "time": "16.3hr", "description": "Low-cost carrier" },
        { "name": "airindia", "price": "4000rs", "time": "15.3hr", "description": "National carrier" }
      ],
      "travel": [{
        "from": "Bhubaneswar",
      "to": "Dubai",
      "price": 10000,
      "departureDate": "30Aug"
      },
      {"from": "hyderabad",
      "to": "Bangalore",
      "price": 12000,
      "departureDate": "31Aug"}]
    },
    {
      "id": 2,
      "tripType": "roundTrip",
      "from": "Mumbai",
      "to": "Chennai",
      "price": 2000,
      "departureDate": "30 Aug",
      "returnDate": "11sept"
    },
    {
      "id": 3,
      "tripType": "multiCity",
      "from": "bhubaneswar",
      "to": "hyderabad",
      "price": 1500,
      "departureDate": "29 Aug"
    }
  ];
  
  localStorage.setItem("flightData", JSON.stringify(flightData));
  export default flightData;
  