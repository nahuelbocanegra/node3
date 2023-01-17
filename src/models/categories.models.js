
const db= require("../utils/database");

const { DataTypes }= require ("sequelize");
const Courses = require("./courses.models");


const Categories = db.define("categories",{
    id:{
        primaryKey:true,
        type:DataTypes.INTEGER,
        autoIncrement:true,
        allowNull:false
    },
    name:{
        type:DataTypes.STRING, 
        allowNull:true,
        unique:true
    },
    courseId:{
        type:DataTypes.INTEGER,
        allowNull:false,
        field:"course_id",
        references:{
            Model:Courses,
            key:"id"
        
        }

    }

},{
    timestamps:false,
})
module.exports=Categories;