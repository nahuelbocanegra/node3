const db= require("../utils/database");

const { DataTypes }= require ("sequelize");
const Users = require("./users.models");
const Courses = require("./courses.models");

const UsersCourses = db.define("users_courses",{
    id:{
        primaryKey:true,
        type:DataTypes.INTEGER,
        autoIncrement:true,
        allowNull:false,
    },
    userId:{
        type:DataTypes.INTEGER,
        field:"user_id",
        allowNull:false,
        references:{
         model:Users,
         key:"id"
        }
    },
    courseId:{
        type:DataTypes.INTEGER,
        field:"course_id",
        allowNull:false,
        references:{
            model:Courses,
            key:"id"
        }
    }
},{
    timestamps:false,
})
module.exports=UsersCourses;