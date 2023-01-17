const express= require("express");
const db= require("./utils/database")
const initModels=require("./models/init.models")
const app=express();
const usersRoutes=require("./routes/users.routes")
const courseRoutes=require("./routes/course.routes")
const categoriaRoutes=require("./routes/categoria.routes")
const videoRoutes=require("./routes/video.routes");
const usersCoursesRoutes = require("./routes/userCours.routes");




const PORT=8000;

app.use(express.json());
app.use("/v1/app",usersRoutes);
app.use("/v1/app",courseRoutes);
app.use("/v1/app",usersCoursesRoutes);
app.use("/v1/app",categoriaRoutes);
app.use("/v1/app",videoRoutes);

db.authenticate()
.then(()=>console.log("Autenticacion exitosa"))
.catch((error)=>console.log(error));
initModels();

db.sync({force:false})
.then(()=>console.log("base de datos sincronizada"))
.catch((error)=>console.log(error));


app.listen(PORT,()=>{
console.log("servidores escuchando en el puerto 8000")
})