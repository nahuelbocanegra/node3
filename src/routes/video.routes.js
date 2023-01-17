const {Router}= require("express");
const {getAllVideo,
    creatVideo,
    getVideoId,
   updateVideo,}=require("../controllers/video.controllers");

const routes=Router() ;


routes.get("/video",getAllVideo);
routes.get("/video/:id",getVideoId);
routes.post("/video",creatVideo);
routes.put("/video/:id",updateVideo);


module.exports=routes;