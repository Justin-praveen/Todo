const mongose  = require("mongoose");

const uni  = mongose.Schema;

  const User =  new uni({  
      email : String,
      password :  String,
      uname : String,
      profile : String,
      admin : Boolean
      
})

const use = mongose.model("users",User);

module.exports = use