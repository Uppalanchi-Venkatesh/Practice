var mongoose=require('mongoose');
var loginUser=new mongoose.Schema(
    {
        "username": {type:String,required:true},
        "password": {type:String,required:true}
    }
)
module.exports=mongoose.model("login",loginUser);