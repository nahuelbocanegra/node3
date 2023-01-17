const Categories=require("../models/categories.models");

class CategoriesServices {
    static async getAll () {
        try {
            const result= await Categories.findAll();
            return result;
        } catch (error) {
            throw error;
        }
    }
    
    static async getById (id){
        try {
           const result = await Categories.findByPk(id);
           return result
        } catch (error) {
           throw error
        }
   }
   static async postCategorie (newCategorie){
       try {
           const result = await Categories.create(newCategorie);
           return result;
       } catch (error) {
           throw error

       }
   }
   static async upedateCategorie (update,id){
       try {
           const result = await Categories.update(update,{where:{id}});
           return result;
       } catch (error) {
          
           throw error
       }
    }
}

module.exports=CategoriesServices