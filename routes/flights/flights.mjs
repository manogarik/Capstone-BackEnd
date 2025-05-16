import express from 'express';
import * as flightsController from '../../controllers/flights/flights-controller.js';

const router = express.Router();

////////////////////////////
// Routes / API Endpoints //
////////////////////////////

// All flights routes (INDUCES) and their corresponding controller functions (CRUD):

///// Seed /////

router.get('/seed', flightsController.seedFlights);

///// INDUCES /////

// Index
router.get('/', flightsController.getFlights);
// New

// // Create
 router.post('/', flightsController.createFlight);
// // Edit
// // Show
//  router.get('/:origin/:destination',flightsController.showFlight);
 router.get('/search',flightsController.searchFlight);

 //router to get distinct airports
 router.get('/airports',flightsController.airports);

 router.get('/:id',flightsController.getFlightPassengerInfo)
 //router to add a passenger to flight
 router.put('/:id/addpassenger',flightsController.addPassenger);
 //router to delete a passenger from a flight
 router.delete('/:flightId/passengers/:passengerId',flightsController.deletePassengerfromFlight)


export default router;