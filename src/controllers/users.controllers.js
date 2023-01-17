const UsersServices=require("../services/users.services")


const getAllUsers= async (req,res)=>{
    try {
        const result= await UsersServices.getAll();
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message)
    }
}
const getUsersId= async (req,res)=>{
    try {
     const {id}=req.params;
     const result=  await UsersServices.getById(id);
     res.status(200).json(result);
    } catch (error) {
     res.status(400).json(error.message)
    }
}
const getUsersCourse= async  (req,res)=> {
    try {
     const {id}=req.params;
     const result=  await UsersServices.getUsersIdCourse(id);
     res.status(200).json(result);
    } catch (error) {
     res.status(400).json(error.message)
    }
}
const creatUser= async (req,res)=>{

    try {
        const user=req.body;
        const result=await UsersServices.postUser(user);
        res.status(201).json(error.message)
    } catch (error) {
        res.status(400).json(error.message)
    }
}
const updateUsers=async (req,res)=>{
    try {
        const {id}=req.params;
        const updateUser=req.body;
        const result= await UsersServices.update(updateUser,id);
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json(error.message)
    }
}




module.exports={
    getAllUsers,
    creatUser,
    getUsersId,
    getUsersCourse,
    updateUsers,
    
}