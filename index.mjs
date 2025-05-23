import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv" 
import cors from "cors"
import flightsRouter from './routes/flights/flights.mjs';
import passengersRouter from './routes/Passengers/passengers.mjs';
dotenv.config()

const app = express();
const PORT = process.env.PORT || 3000;

//Middleware
app.use(express.urlencoded());
app.use(express.json());
app.use(cors());

app.use('/flights', flightsRouter);
app.use('/passengers',passengersRouter);

app.get('/',(req,res)=>
    {
        res.send("Welcome to FlyMate!!");
    })
    
    //Mangoose connection
    mongoose.connect(process.env.ATLAS_URI);
    mongoose.connection.once('open',()=>
    {
        console.log("Successfully Connected to MongoDB!")
    })
    
    app.use((err, _req, res, next) => {
        res.status(500).send("Seems like we messed up somewhere...");
      });
    
     app.listen(PORT,()=>
    {
        console.log(`server listening on port: ${PORT}`);
    })