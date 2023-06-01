const User=require('../model/userModel')
const bcrypt=require('bcryptjs')
const authController={
    register:async (req,res)=>{
        try{
            const {name,email,mobile,password}=req.body
            //encrypt pass
            const encPass=await bcrypt.hash(password,10)
            
            //checkimg email
            const extEmail=await User.findOne({email})
            if(extEmail)
            return res.status(400).json({msg:`${email} already exists.`})
            
            const extMobile=await User.findOne({mobile})
            if(extMobile)
            return res.status(400).json({msg:`${mobile} already exist`})

            const newUser=await User.create({
                name,
                email,
                mobile,
                password:encPass
            })
           res.json({ msg: "Registered Successfully", data:newUser})
            
        }catch(err){
            return res.json.status(500).json({msg:err.message})
        }

    },
    login:async (req,res)=>{
        try{
            res.json({msg:'login called called'})

        }catch(err){
            return res.json.status(500).json({msg:err.message})
        }

    },
    logout:async (req,res)=>{
        try{
            res.json({msg:'logout called'})

        }catch(err){
            return res.json.status(500).json({msg:err.message})
        }

    },
    currentUser:async (req,res)=>{
        try{
            res.json({msg:'register called'})

        }catch(err){
            return res.json.status(500).json({msg:err.message})
        }

    },
    authToken:async (req,res)=>{
        try{
            res.json({msg:'register called'})

        }catch(err){
            return res.json.status(500).json({msg:err.message})
        }

    },
}
module.exports=authController