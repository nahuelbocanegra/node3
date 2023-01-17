const VideoServices = require("../services/video.services");



const  getAllVideo = async (req,res)=>{
    try {
        const result= await VideoServices.getAll();
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message)
    }
}

const getVideoId= async (req,res)=>{
    try {
     const {id}=req.params;
     const result=  await VideoServices.getById(id);
     res.status(200).json(result);
    } catch (error) {
     res.status(400).json(error.message)
    }
 }
 const creatVideo= async (req,res)=>{
     try {
         const newuser=req.body;
         const result= await VideoServices.postUser(newuser);
         res.status(201).json(result)
     } catch (error) {
         res.status(400).json(error.message)
     }
 
 }
 const updateVideo= async (req,res)=>{
     try {
         const {id}=req.params;
         const updateUser=req.body;
         const result= await VideoServices.updateUsers(updateUser,id);
         res.status(200).json(result)
         
     } catch (error) {
         res.status(400).json(error.message)
     }
 }



module.exports={
    getAllVideo,
    creatVideo,
    getVideoId,
   updateVideo,
  
}