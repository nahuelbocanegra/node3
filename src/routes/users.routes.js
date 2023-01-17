const {Router}=require("express");
const {getAllUsers,creatUser,getUsersId,getUsersCourse,updateUsers}=require("../controllers/users.controllers")

const routes= Router();

routes.get("/users", getAllUsers);
routes.get("/users/:id",getUsersId)
routes.get("/users/:id/courses",getUsersCourse);
routes.post("/users",creatUser);
routes.put("/users",updateUsers);



module.exports=routes;