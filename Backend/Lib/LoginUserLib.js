var model=require("../Model/LoginUserModel");
module.exports={
    createUsers: function(userObj){
        var loginUser=new model(userObj);
        loginUser.save();
    },
    getallusers: function(callback){
        model.find({},function(err,result){
            callback(err,result);
        })
    }
}