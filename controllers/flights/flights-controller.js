import Flight from '../../Models/Flights.mjs';


async function seedFlights(req, res) {
    try {
        await Flight.deleteMany({});
        await Flight.create(
            {
                flightNumber: "FM202",
                origin: "IAD",
                destination: "RDU",
                departureDate:"2025-06-01",
                departureTime: "2025-06-01T09:00:00Z",
                arrivalTime: "2025-06-01T10:00:00Z",
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
                departureDate:"2025-10-19",
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
                departureDate:"2025-06-02",
                departureTime: "2025-06-02T07:00:00Z",
                arrivalTime: "2025-06-02T08:00:00Z",
                status: "On Time",
                price:150
            },
            {
                flightNumber: "FM554",
                origin: "DCA",
                destination: "BOS",
                departureDate:"2025-06-24",
                departureTime: "2025-06-24T10:10:00Z",
                arrivalTime: "2025-06-24T11:46:00Z",
                status: "On Time",
                price:191
            },
            {
                flightNumber: "FM1554",
                origin: "DCA",
                destination: "BOS",
                departureDate:"2025-06-03",
                departureTime: "2025-09-03T07:00:00Z",
                arrivalTime: "2025-09-17T08:32:00Z",
                status: "On Time",
                price:79
            },
            {
                flightNumber: "FM1254",
                origin: "DCA",
                destination: "BOS",
                departureDate:"2025-09-17",
                departureTime: "2025-09-17T12:45:00Z",
                arrivalTime: "2025-09-17T14:15:00Z",
                status: "On Time",
                price:79
            },
            {
                flightNumber: "FM2154",
                origin: "DCA",
                destination: "BOS",
                departureDate:"2025-06-03",
                departureTime: "2025-06-03T15:15:00Z",
                arrivalTime: "2025-06-03T16:53:00Z",
                status: "On Time",
                price:79
            },
            {
                flightNumber: "FM2754",
                origin: "DCA",
                destination: "BOS",
                departureDate:"2025-05-31",
                departureTime: "2025-05-31T18:15:00Z",
                arrivalTime: "2025-05-31T19:53:00Z",
                status: "On Time",
                price:90
            },
            {
                flightNumber: "FM617",
                origin: "DCA",
                destination: "JFK",
                departureDate:"2025-06-06",
                departureTime: "2025-06-06T06:15:00Z",
                arrivalTime: "2025-06-06T07:20:00Z",
                status: "On Time",
                price:65
            },
            {
                flightNumber: "FM1347",
                origin: "DCA",
                destination: "JFK",
                departureDate:"2025-07-16",
                departureTime: "2025-07-16T11:30:00Z",
                arrivalTime: "2025-07-16T15:20:00Z",
                status: "On Time",
                price:65
            },
            {
                flightNumber: "FM817",
                origin: "DCA",
                destination: "JFK",
                departureDate:"2025-06-16",
                departureTime: "2025-06-16T06:15:00Z",
                arrivalTime: "2025-06-16T07:20:00Z",
                status: "On Time",
                price:115
            },
            {
                flightNumber: "FM1017",
                origin: "DCA",
                destination: "JFK",
                departureDate:"2025-06-26",
                departureTime: "2025-06-26T08:15:00Z",
                arrivalTime: "2025-06-26T09:20:00Z",
                status: "On Time",
                price:65
            },
            {
                flightNumber: "FM511",
                origin: "DCA",
                destination: "LAS",
                departureDate:"2025-07-16",
                departureTime: "2025-07-16T06:30:00Z",
                arrivalTime: "2025-07-16T12:40:00Z",
                status: "On Time",
                price:475
            },
            {
                flightNumber: "FM1211",
                origin: "DCA",
                destination: "LAS",
                departureDate:"2025-06-26",
                departureTime: "2025-06-26T06:30:00Z",
                arrivalTime: "2025-06-26T18:20:00Z",
                status: "On Time",
                price:183
            },
            {
                flightNumber: "FM777",
                origin: "DCA",
                destination: "LAS",
                departureDate:"2025-07-19",
                departureTime: "2025-07-19T11:15:00Z",
                arrivalTime: "2025-06-26T19:42:00Z",
                status: "Delayed",
                price:165
            },
            {
                flightNumber: "FM607",
                origin: "DCA",
                destination: "LAS",
                departureDate:"2025-06-26",
                departureTime: "2025-06-26T17:15:00Z",
                arrivalTime: "2025-06-26T22:20:00Z",
                status: "On Time",
                price:223
            },
            {
                flightNumber: "FM254",
                origin: "DCA",
                destination: "JFK",
                departureDate:"2025-06-16",
                departureTime: "2025-06-16T06:15:00Z",
                arrivalTime: "2025-06-16T18:20:00Z",
                status: "On Time",
                price:165
            },
            {
                flightNumber: "FM254",
                origin: "IAD",
                destination: "BOS",
                departureDate:"2025-06-16",
                departureTime: "2025-06-16T06:15:00Z",
                arrivalTime: "2025-06-16T18:20:00Z",
                status: "On Time",
                price:65
            },
            {
                flightNumber: "FM111",
                origin: "IAD",
                destination: "BOS",
                departureDate:"2025-06-16",
                departureTime: "2025-06-16T06:15:00Z",
                arrivalTime: "2025-06-16T18:20:00Z",
                status: "On Time",
                price:125
            },
            {
                flightNumber: "FM222",
                origin: "IAD",
                destination: "BOS",
                departureDate:"2025-06-16",
                departureTime: "2025-06-16T06:15:00Z",
                arrivalTime: "2025-06-16T18:20:00Z",
                status: "On Time",
                price:165
            },
            {
                flightNumber: "FM5271",
                origin: "IAD",
                destination: "JFK",
                departureDate:"2025-05-20",
                departureTime: "2025-05-20T12:20:00Z",
                arrivalTime: "2025-05-20T13:46:00Z",
                status: "On Time",
                price:147
            },
            {
                flightNumber: "FM5272",
                origin: "IAD",
                destination: "JFK",
                departureDate:"2025-05-28",
                departureTime: "2025-05-28T20:30:00Z",
                arrivalTime: "2025-05-28T22:00:00Z",
                status: "On Time",
                price:147
            },
            {
                flightNumber: "FM5447",
                origin: "IAD",
                destination: "JFK",
                departureDate:"2025-05-28",
                departureTime: "2025-05-28T17:25:00Z",
                arrivalTime: "2025-05-28T19:20:00Z",
                status: "On Time",
                price:205
            },
            {
                flightNumber: "FM2710",
                origin: "IAD",
                destination: "BOS",
                departureDate:"2025-06-08",
                departureTime: "2025-06-08T12:35:00Z",
                arrivalTime: "2025-06-08T14:15:00Z",
                status: "On Time",
                price:220
            },
            {
                flightNumber: "FM755",
                origin: "IAD",
                destination: "BOS",
                departureDate:"2025-06-09",
                departureTime: "2025-06-09T10:30:00Z",
                arrivalTime: "2025-06-09T12:00:00Z",
                status: "On Time",
                price:200
            },
            {
                flightNumber: "FM1323",
                origin: "IAD",
                destination: "LAS",
                departureDate:"2025-06-04",
                departureTime: "2025-06-04T09:00:00Z",
                arrivalTime: "2025-06-04T10:50:00Z",
                status: "On Time",
                price:267
            },
            {
                flightNumber: "FM1668",
                origin: "IAD",
                destination: "LAS",
                departureDate:"2025-06-04",
                departureTime: "2025-06-04T19:40:00Z",
                arrivalTime: "2025-06-04T21:45:00Z",
                status: "On Time",
                price:265
            },
            {
                flightNumber: "FM780",
                origin: "IAD",
                destination: "LAS",
                departureDate:"2025-06-05",
                departureTime: "2025-06-05T15:45:00Z",
                arrivalTime: "2025-06-05T17:20:00Z",
                status: "On Time",
                price:410
            },
            
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
            const flightId = req.params.id;
            const {passengerId} = req.body;
            const flight = await Flight.findByIdAndUpdate(flightId,{$push :{passengers : passengerId}}).populate('passengers')
            if(!flight)
                console.log("Flight not found");
        
            res.json(flight);
    } catch (error) {
        console.log(error);
    }
        }

        //function to delete passengers from a flight
        async function deletePassengerfromFlight(req,res){
            try{
                const {flightId,passengerId} = req.params;
                
                const flight = await Flight.findByIdAndUpdate(flightId,{$pull :{passengers : passengerId}}).populate('passengers')
                if(!flight)
                    console.log("Flight not found");
                
                

                res.json(flight);
        } catch (error) {
            console.log(error);
        }
            }
      
  
  
  
  

 export {seedFlights,getFlights,createFlight,searchFlight,airports,addPassenger,getFlightPassengerInfo,deletePassengerfromFlight}