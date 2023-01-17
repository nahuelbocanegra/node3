const Users=require("./users.models");
const UsersCourses=require("./users_courses.models");
const Courses=require("./courses.models");
const Categories=require("./categories.models");
const Videos=require("./videos.models");

const initModels = () =>{
 
    Users.hasMany(UsersCourses,{as:"author",foreignKey:"user_id"});
    UsersCourses.belongsTo(Users ,{as:"course",foreignKey:"user_id"});

    UsersCourses.belongsTo(Courses,{as:"courses",foreignKey:"course_id"});
    Courses.hasMany(UsersCourses,{as:"course",foreignKey:"course_id"});

   
    Categories.belongsTo(Courses,{as:"course",foreignKey:"course_id"});
    Courses.hasMany(Categories,{as:"categorie",foreignKey:"course_id"});

    Videos.belongsTo(Courses,{as:"course",foreignKey:"course_id"});
    Courses.hasMany(Videos,{as:"video",foreignKey:"course_id"});
   
};
module.exports=initModels;