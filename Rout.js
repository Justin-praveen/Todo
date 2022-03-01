const express = require("express");
const use = require("./Schema");
const used = require("./datas");
const multer = require("multer");
const rout = express.Router("");

// Multer 
const store = multer.diskStorage({
    destination : (req,file,cb)=>{
        cb(null,"./photos")
    },
    filename : (req,file,clb)=>{
        clb(null,file.originalname);
    }
})

const upload = multer({storage : store});


// Multer ends

rout.get("/udata",async(req,res)=>{
  const hu = await use.find();
  res.json(hu)
})



rout.post("/login",async(req,res)=>{

    const u = use.find({email:req.body.email},(err,data)=>{
        if(data){
            const a = data
            if(a == ""){ 
                res.json({
                    status : false,
                    error : "email error....!"
                })
            }
            else{
                 use.findOne({email : req.body.email},(err,data)=>{

        if(data.password == req.body.password){
            res.json({
                uname : data.uname,
                profile : data.profile,
                admin : data.admin,
                email : data.email
            })
        }
        else{
            res.json({
                status : false,
                error : "Password not match..!"
            });
        }
    })
            }
        }
    })

    })
       
rout.post("/reg",async(req,res)=>{
    
    const u = use.find({uname:req.body.uname},async(err,data)=>{
        if(data){
            const a = data
            if(a == ""){
                const e = use.find({email : req.body.email},async(err,edata)=>{
                    const b = edata;
                    if(b == ""){
                        const reg = new use({
                            uname : req.body.uname,
                            email : req.body.email, 
                            password : req.body.password,
                            profile : "no",
                            admin : false
                        })
                        await reg.save();
                        res.json({
                            status : true,
                            msg : "register sucessfully...!"
                        });
                    }
                    else{
                        res.json({
                            status : false,
                            error : "email already exist...!"
                        })
                    }
                }) 
            }
            else{
                res.json({
                    status : false,
                    error : "Username already exist...!"
                })
            }
        }                            
    })
 })  

rout.post("/post",async(req,res)=>{
    const post = new used({
        uname : req.body.uname,
        title :req.body.title,
        text : req.body.text
    })
    await post.save();
    res.json({
        status : true,
        msg : "posted"
    });
})


rout.post("/tda",async(req,res)=>{

    const hu =  used.find({uname : req.body.uname},async(err,data)=>{
        if(data){
            res.json(data)
        }
        else{
            res.json("no user found....!")
        }
    });
    
    

})

rout.post("/pdel",async(req,res)=>{
    var id = req.body.ids;
    used.findByIdAndDelete(id, function (err, docs) {
        if (err){
            console.log(err)
        }
        else{
            console.log("Deleted : ", docs);
            res.json({
                status : true,
                delete : "Done"
            })
        }
    });
   
})
rout.post("/udel",async(req,res)=>{
    var uname = {uname : req.body.uname};
    use.findOneAndDelete(uname, function (err, docs) {
        if (err){
            console.log(err)
        }
        else{
            console.log("Deleted : ", docs);
            res.json({
                status : true,
                delete : "Done"
            })
        }
    });
   
})

rout.put("/f",async(req,res)=>{

    const e = req.body.email;
    const gu = await use.updateOne({email : e} ,{password : req.body.password});
    if(gu.modifiedCount == 0){
        res.json({
            status : false,
            msg : "try again...!"
        })
    }
    else{
        res.json({
            status : true,
            msg : "updated...!"
        })
    } 
    
}) 

rout.post("/profile", upload.single("files"),async(req,res)=>{

    const e = req.body.uname 
    const gu = await use.updateOne({uname : e} ,{profile : req.file.originalname});
    if(gu.modifiedCount == 0){
      res.json({
        status : false,
        msg : "try again...!"
    })
    }
    else{
        res.json({ 
            status : true,
            msg : "updated...!"
        })
    }
})

module.exports = rout;








