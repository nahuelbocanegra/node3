const CourseServices=require("../services/course.services");

const getAllCourses = async (req,res)=>{
    try {
        const result= await CourseServices.getAll();
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message)
    }

}

const getCoursesId= async (req,res)=>{
    try {
     const {id}=req.params;
     const result=  await CourseServices.getById(id);
     res.status(200).json(result);
    } catch (error) {
     res.status(400).json(error.message)
    }
}
const creatCourses= async (req,res)=>{
    try {
        const newuser=req.body;
        const result= await CourseServices.postCourse(newuser);
        res.status(201).json(result)
    } catch (error) {
        res.status(400).json(error.message)
    }

}
const updateCourse= async (req,res)=>{
    try {
        const {id}=req.params;
        const update=req.body;
        const result= await CourseServices.updateCourse(update,id);
        res.status(200).json(result)
        
    } catch (error) {
        res.status(400).json(error.message)
    }
}

module.exports={
    getAllCourses,
    getCoursesId,
    creatCourses,
    updateCourse,
   

}