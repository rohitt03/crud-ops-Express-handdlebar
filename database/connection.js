const mysql=require("mysql");
module.exports=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"7030524554",
    port:"3306",
    database:"react"
});