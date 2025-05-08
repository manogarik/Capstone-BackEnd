import express from 'express';
import * as passengersController from '../../controllers/Passengers/passengers-controller.js'

const router = express.Router();

//Route to seed
router.get('/seed',passengersController.seedPassenger);

//Route to get Passengers
router.get('/',passengersController.getPassengers);


export default router;