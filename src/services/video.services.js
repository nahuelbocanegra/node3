const Video=require("../models/videos.models");

class VideoServices {
    static async getAll () {
        try {
            const result= await Video.findAll();
            return result;
        } catch (error) {
            throw error;
        }
    }
    
    static async getById (id){
        try {
           const result = await Video.findByPk(id);
           return result
        } catch (error) {
           throw error
        }
   }
   static async postVideo (newuser){
       try {
           const result = await Video.create(newuser);
           return result;
       } catch (error) {
           throw error

       }
   }
   static async upedateVideo (update,id){
       try {
           const result = await Video.update(update,{where:{id}});
           return result;
       } catch (error) {
          
           throw error
       }
    }
}

module.exports=VideoServices