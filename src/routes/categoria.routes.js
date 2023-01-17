const {Router}= require("express");
const {getAllCategories,
    creatCategories,
    getCategoriesId,
   updateCategories,}=require("../controllers/categories.controllers");

const routes=Router() ;


routes.get("/categories",getAllCategories);
routes.get("/categories/:id",getCategoriesId);
routes.post("/categories",creatCategories);
routes.put("/categories/:id",updateCategories);


module.exports=routes;