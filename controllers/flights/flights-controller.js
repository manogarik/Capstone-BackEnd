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

 export {seedFlights,getFlights}