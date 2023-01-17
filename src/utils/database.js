const { Sequelize}= require("sequelize");

const db=new Sequelize({
  database: "userscourses",
  username: "postgres",
  host: "localhost",
  port: "5432",
  password: "RUTT",
  dialect: "postgres" 

})

module.exports = db;