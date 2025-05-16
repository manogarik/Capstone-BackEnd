import Passenger from "../../Models/Passengers.mjs"



//function to get Passengers
async function getPassengers(req, res) {
    try {
        const passengers = await Passenger.find({});
        res.status(200).json(passengers);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}
//function to post a new Passenger
async function createPassenger(req, res) {
    try {
        
        const passenger = await Passenger.create(req.body);
        console.log(passenger);
        res.status(201).json(passenger);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

//function to deletePasssenger
async function deletePassenger(req, res) {
    try {
        await Passenger.findByIdAndDelete(req.params.id);
        res.send("Deleted the Passenger");

        
    } catch (error) {
        console.error(error);
    }
}

async function updatePassenger(req,res){
        try{
            
            const passenger = await Passenger.findByIdAndUpdate(req.params.id,req.body)
            if(!passenger)
                console.log("passenger not found");
        
            res.json(passenger);
    } catch (error) {
        console.log(error);
    }
}

export {getPassengers,createPassenger,deletePassenger,updatePassenger}