const mongose  = require("mongoose");

const uni  = mongose.Schema;

  const User =  new uni({
      uname : String,
      title : String,
      text : String
})

const used = mongose.model("data",User);

module.exports = used