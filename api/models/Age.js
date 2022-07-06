const mongoose=require("mongoose");

const AgeSchema=new mongoose.Schema({
    username:{
        type:String
    },
   
    age:{
       type:Number
    },
    fullName:{
        type:String,
    },
    s1:{
        type:String,
    },
  
    fatherName:{
        type:String,
    },
    occupation:{
        type:String,
    },
    village:{
        type:String,
    },
    taluka:{
        type:String,
    },
    state:{
        type:String,
    },
    district:{
        type:String,
    },
    pincode:{
        type:String,
    },
    
   

},
 {timestamps:true}
);


module.exports=mongoose.model("Age",AgeSchema);