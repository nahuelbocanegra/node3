const db = require("../utils/database");
const Users= require("../models/users.models");
const UsersCourses = require("../models/users_courses.models");
const Courses = require("../models/courses.models");
const Videos = require("../models/videos.models");
const Categories = require("../models/categories.models");

const users=[
    {
    
        first_name:"nahuel",
        last_name:"boca",
        password:"1234",
        email:"nahuboca7@gmail.com"
    },
    {
        first_name:"franco",
        last_name:"boca",
        email:"fr7@gmail.com",
        password:"1234",
    },
    {
        first_name:"fr23",
        last_name:"bocanegra",
        email:"pedro7@gmail.com",
        password:"1234",
    }
];
const courses=[ 
   {title:"javaScript",description:"curso 1",instructor:"Pedro",} 
   ,{title:"Node",description:"curso 2", instructor:"Juan",} 
,{title:"React",description:"curso 3",instructor:"Gonzalo",} 


];
const usersCourses=[{
    userId:1,
    course_id:2,
},{
    userId:1,
    courseId:1,
},{
    userId:3,
    courseId:3,
},{
    userId:2,
    courseId:2,
}];
const videos=[
{title:"video1",url:"url1",courseId:1,},
{title:"video2", url:"url2",courseId:2,},
{title:"video3",url:"url3",courseId:3,},
{ title:"video1",url:"url1",courseId:1,}
];
const categories=[
{name:"deportes",courseId:3},
{name:"arquitectura",courseId:2},
{name:"autos",courseId:1}]

db.sync({force:true})
.then(()=>{
    console.log("iniciando");
    users.forEach((user) => Users.create(user));
    setTimeout(()=>{
        usersCourses.forEach((uc)=>UsersCourses.create(uc))
    },100);
    setTimeout(()=>{
       courses.forEach((course) => Courses.create(course));
    },200);
    setTimeout(()=>{
        categories.forEach((category)=>Categories.create(category))
    },350);
    setTimeout(()=>{
        videos.forEach((video)=>Videos.create(video))
    },450);
   
}).catch((error)=>{console.log(error)});