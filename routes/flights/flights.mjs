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
// router.get('/new', fruitsController.renderNewForm);
//Delete
// router.delete('/:id',flightsController.deleteFlight);
// // Update
// router.patch('/:id', flightsController.updateFlight);
// // Create
 router.post('/', flightsController.createFlight);
// // Edit
// // Show
//  router.get('/:origin/:destination',flightsController.showFlight);
 router.get('/search',flightsController.searchFlight);

 //router to get distinct airports
 router.get('/airports',flightsController.airports);


export default router;