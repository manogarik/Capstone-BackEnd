import mongoose from "mongoose";

const passengerSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required : true,
        
    },
    lastName:{
        type:String,
        required : true,
    },
    email : {
        type:String,
        lowercase:true,
        match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email address'],
        unique:true,
        required:true,
    },
    age : {
        type:Number,
        required:true
    },
    flightId: { type: mongoose.Schema.Types.ObjectId, ref: 'flights' }
    
});

    export default mongoose.model("Passenger", passengerSchema)