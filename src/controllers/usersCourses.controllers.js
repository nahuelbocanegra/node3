const UsersCoursesServices=require("../services/userCouser.services")

const creatUserCourses= async (req,res)=>{

    try {
        const userCouser=req.body;
        const result=await UsersCoursesServices.postUserCouser(userCouser);
        res.status(201).json(result)
    } catch (error) {
        res.status(400).json(error.message)
    }
}

module.exports={
    creatUserCourses
    
}