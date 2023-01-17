const Course=require("../models/courses.models");

class CourseServices {
 static async getAll() {
    try {
        const result= await Course.findAll();
        return result;
    } catch (error) {
        throw error;
    }
 }
static async getById (id){
    try {
       const result = await Course.findByPk(id);
       return result
    } catch (error) {
       throw error
    }
}
static async postCourse (newuser){
    try {
        const result = await Course.create(newuser);
        return result;
    } catch (error) {
        throw error

    }
}
static async upedate (update,id){
    try {
        const result = await Course.update(update,{where:{id}});
        return result;
    } catch (error) {
       
        throw error
    }
}

}

module.exports=CourseServices;