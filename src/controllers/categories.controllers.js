const CategoriesServices = require("../services/categoria.services");



const  getAllCategories = async (req,res)=>{
    try {
        const result= await CategoriesServices.getAll();
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message)
    }
}

const getCategoriesId= async (req,res)=>{
    try {
     const {id}=req.params;
     const result=  await CategoriesServices.getById(id);
     res.status(200).json(result);
    } catch (error) {
     res.status(400).json(error.message)
    }
 }
 const creatCategories= async (req,res)=>{
     try {
         const newcategorie=req.body;
         const result= await CategoriesServices.postCategorie(newcategorie);
         res.status(201).json(result)
     } catch (error) {
         res.status(400).json(error.message)
     }
 
 }
 const updateCategories= async (req,res)=>{
     try {
         const {id}=req.params;
         const updateCategorie=req.body;
         const result= await CategoriesServices.updateCategorie(updateCategorie,id);
         res.status(200).json(result)
         
     } catch (error) {
         res.status(400).json(error.message)
     }
 }



module.exports={
getAllCategories,
creatCategories,
getCategoriesId,
updateCategories
}