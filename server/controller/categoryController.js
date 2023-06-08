const Category=require('../model/categoryModel')

const categoryCrtl={
    getAll:async(req,res)=>{
        try{
            const data=await Category.find({})
            res.status(200).json({length:data.length,categories:data})
        }catch(err){
            return res.status(500).json({msg:err.message})
        }
    },
    getSingle:async(req,res)=>{
        try{
            let id=req.params.id
            let exCat=await Category.findById({id_:id})

            if(!exCat)
            return res.status(404).json({msg:`requested category id not found`})
            return res.status(200).json({category:exCat})
        }catch(err){
            return res.status(500).json({msg:err.message})
        }
    },
    create:async(req,res)=>{
        try{
            let {title,desc}=req.body
            let exCat=await Category.findOne({title})
            if(exCat)
            return res.status(400).json({msg:`Category alredy exist`}) 

            let newCat=await Category.create({title,desc})
            res.status(200).json({msg:`new category created..`,category:newCat})
        }catch(err){
            return res.status(500).json({msg:err.message})
        }
    },
    update:async(req,res)=>{
        try{
           let id= req.params.id
           let exCat=await Category.findById({_id:id})
           if(!exCat)
           return res.status(404).json({msg:`category not found`})

           let updated=await Category.findByIdAndUpdate({_id:id},req.body)
           res.status(200).json({msg:`category updated successfully`,updated})
        }catch(err){
            return res.status(500).json({msg:err.message})
        }
    },
    delete:async(req,res)=>{
        try{
            let id= req.params.id
           let exCat=await Category.findById({_id:id})
           if(!exCat)
           return res.status(404).json({msg:`category not found`})

           let updated=await Category.findByIdAndDelete({_id:id},req.body)
           res.status(200).json({msg:`category deleted successfully`,updated})
            
        }catch(err){
            return res.status(500).json({msg:err.message})
        }
    },
}
module.exports=categoryCrtl