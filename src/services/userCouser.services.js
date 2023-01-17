const UsersCourses = require("../models/users_courses.models");

class UsersCoursesServices {
    static async postUserCouser (user) {
        try {
            const result= await UsersCourses.create(user)
            return result;
        } catch (error) {
            throw error
        }
    }
}

module.exports = UsersCoursesServices;
