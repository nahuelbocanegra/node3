const {Router}=require("express");
const {creatUserCourses}=require("../controllers/usersCourses.controllers")

const routes= Router();

routes.post("/usercourses",creatUserCourses);




module.exports=routes;