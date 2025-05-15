import Passenger from "../../Models/Passengers.mjs"

async function seedPassenger(req,res){
    try{
        await Passenger.deleteMany({});
        await Passenger.create(
            {
                firstName : "Manogari",
                lastName:"Kumaraguru",
                email:"manoguru768@gmail.com",
                age:27
            },
            {
                firstName : "Karthikeyan",
                lastName:"Vaideswaran",
                email:"karthikvaideshnc@gmail.com",
                age:33
            },
            {
                firstName : "Sashtika",
                lastName:"Vaideswaran",
                email:"sashtika2023@gmail.com",
                age:1
            },
            {
                firstName : "Vijayalakshmi",
                lastName:"Kumaraguru",
                email:"vijiguru1977@gmail.com",
                age:47
            },
            {
                firstName : "Kumaraguru",
                lastName:"Thirugnanam",
                email:"gurusapp@gmail.com",
                age:51
            },
            {
                firstName : "Sivakami",
                lastName:"Kumaraguru",
                email:"sivakamikmr@gmail.com",
                age:26
            },
            {
                firstName : "Avinash",
                lastName:"Kasirajan",
                email:"avinashn@gmail.com",
                age:31
            },
            {
                firstName : "Abhirami",
                lastName:"Vaideswaran",
                email:"abhivaidesh@gmail.com",
                age:28
            },
            
        );
        res.status(201).redirect('/passengers')
    }
    catch(error){
        res.status(400).json({ error: error.message });
    }
};

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

export {seedPassenger,getPassengers,createPassenger,deletePassenger,updatePassenger}