import express from 'express';
import * as passengersController from '../../controllers/Passengers/passengers-controller.js'

const router = express.Router();

//Route to seed


//Route to get Passengers
router.get('/',passengersController.getPassengers);

//Route to create a passenger
router.post('/',passengersController.createPassenger);

//Route to update a passenger
router.put('/',passengersController.updatePassenger);

//Route to delete a passenger
router.delete('/:id',passengersController.deletePassenger);
export default router;