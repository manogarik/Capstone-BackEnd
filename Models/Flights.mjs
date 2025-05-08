import mongoose from "mongoose";

// Define the schema for learners.
// Mongoose will add the _id property to your schemas by default.
const flightSchema = new mongoose.Schema({
    flightNumber: {
        type: String,
        required : true,
        uppercase :true
    },
    
    origin : {
        type:String,
        required:true,
        match: /^[A-Z]{3}$/,
    },
    destination: {
        type : String,
        required :true,
        match: /^[A-Z]{3}$/,
    },
    departureDate:{
        type:Date,
        required:true,
    },
    departureTime :{
        type : Date,
        required : true,
        validate: {
            validator: (val) => val > new Date(),
            message: "Departure time must be in the future."
          },
    },
    arrivalTime:{
        type : Date,
        required : true,
        validate: {
            validator: (val) => val > new Date(),
            message: "Departure time must be in the future."
          },
    } ,
    
    status:{
        type : String,
        enum :['On Time' , 'Delayed', 'Cancelled'],
        required : true
    } ,
    price:{
        type : Number,
        required :true
    }
})

export default mongoose.model("Flight", flightSchema);