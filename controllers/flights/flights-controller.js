import Flight from '../../Models/Flights.mjs';


async function seedFlights(req, res) {
    try {
        await Flight.deleteMany({});
        await Flight.create(
            {
                flightNumber: "FM202",
                origin: "IAD",
                destination: "RDU",
                departureDate:"2025-06-24",
                departureTime: "2025-06-24T09:00:00Z",
                arrivalTime: "2025-06-24T10:00:00Z",
                status: "On Time",
                price:270
            },
            {
                flightNumber: "FM210",
                origin: "RDU",
                destination: "LAS",
                departureDate :"2025-08-09",
                departureTime: "2025-08-09T07:30:00Z",
                arrivalTime: "2025-08-09T09:17:00Z",
                status: "On Time",
                price:150
            },
            {
                flightNumber: "FM304",
                origin: "SFO",
                destination: "RDU",
                departureDate:"2025-09-09",
                departureTime: "2025-09-09T07:30:00Z",
                arrivalTime: "2025-09-09T09:17:00Z",
                status: "Delayed",
                price:350
            },
            {
                flightNumber: "FM109",
                origin: "RDU",
                destination: "JFK",
                departureDate:"2025-10-09",
                departureTime: "2025-10-19T07:30:00Z",
                arrivalTime: "2025-10-19T09:30:00Z",
                status: "Delayed",
                price:290
            },
            {
                flightNumber: "FM001",
                origin: "RDU",
                destination: "BOS",
                departureDate:"2025-06-09",
                departureTime: "2025-06-09T07:00:00Z",
                arrivalTime: "2025-09-09T11:30:00Z",
                status: "On Time",
                price:190
            },
            {
                flightNumber: "FM006",
                origin: "DCA",
                destination: "RDU",
                departureDate:"2025-08-09",
                departureTime: "2025-06-09T06:30:00Z",
                arrivalTime: "2025-06-09T07:30:00Z",
                status: "On Time",
                price:150
            },
            {
                flightNumber: "FM002",
                origin: "DCA",
                destination: "RDU",
                departureDate:"2025-08-10",
                departureTime: "2025-08-10T07:00:00Z",
                arrivalTime: "2025-06-10T08:00:00Z",
                status: "On Time",
                price:160
            },
            {
                flightNumber: "FM009",
                origin: "IAD",
                destination: "RDU",
                departureDate:"2025-09-17",
                departureTime: "2025-09-17T07:00:00Z",
                arrivalTime: "2025-09-17T08:00:00Z",
                status: "On Time",
                price:150
            }
            
        );
        res.status(201).redirect('/flights');
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

async function getFlights(req, res) {
    try {
        const flights = await Flight.find({});
        res.status(200).json(flights);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

//create Flight
async function createFlight(req, res) {
    try {
        
        const flight = await Flight.create(req.body);
        console.log(flight);
        res.status(201).json(flight);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

async function searchFlight(req, res){
    const { origin, destination } = req.query;
  
    try {
      const flights = await Flight.find({
        origin: origin,
        destination: destination
      });
  
      res.json(flights);
    } catch (err) {
      res.status(500).json({ message: 'Error fetching flights', error: err });
    }
  };
  
  async function airports(req,res){
    try {
        const origins = await Flight.distinct('origin');
        const destinations = await Flight.distinct('destination');
        res.json({ origins, destinations });
      } 
     
      catch (err) {
        res.status(500).json({ message: 'Error fetching airports', error: err });
      }
     
    };

    async function getFlightPassengerInfo(req, res) {
        try {
          const flight = await Flight.findById(req.params.id).populate('passengers');
          res.json(flight);
        } catch(error) {
          res.status(400).json({ error: error.message });
        }
      }
  
      //function to add passengers to flight
      async function addPassenger(req,res){
        try{
            const 
        }
      }
  
  
  
  

 export {seedFlights,getFlights,createFlight,searchFlight,airports}