const Courses = require("../models/courses.models");
const Users = require("../models/users.models");
const UsersCourses = require("../models/users_courses.models");

class UsersServices {
  static async getAll() {
    try {
      const result = await Users.findAll();
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async getById (id){
    try {
       const result = await Users.findByPk(id);
       return result
    } catch (error) {
       throw error
    }
}
static async postUser (user) {
    try {
        const result= await Users.create(user)
        return result;
    } catch (error) {
        throw error
    }
  }
static async getUsersIdCourse (id){
    try {
       const result = await Users.findOne({where:{id},
        attributes:{
            exclude:["password"]
        },
        includes:{
            model:UsersCourses,
            as:"courses",
            attributes:["courseId"],
            includes:{
                model:Courses,
                as:"course",
                attributes:["title"]
            }
        }
       
    
    });
       return result
    } catch (error) {
       throw error
    }
    
}
static async update (updateUser,id){
    try {
        const result = await Users.update(updateUser,{where:{id}});
        return result;
    } catch (error) {
        throw error
    }
}

}
module.exports = UsersServices;
