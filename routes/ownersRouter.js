const express=require("express")
const router=express.Router()

router.get("/",function(req,res){
    res.send("Hey owner is working")
})

module.exports=router