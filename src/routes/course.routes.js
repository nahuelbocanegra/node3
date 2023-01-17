const {Router}= require("express");
const {getAllCourses,getCoursesId,creatCourses,updateCourse}=require("../controllers/courses.controllers");
const routes=Router() ;


routes.get("/course",getAllCourses);
routes.get("/course/:id",getCoursesId);
routes.post("/course",creatCourses);
routes.put("/course/:id",updateCourse);








module.exports=routes;