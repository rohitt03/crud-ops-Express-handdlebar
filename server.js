const express=require("express");
const app=express();
path=require("path");
const mysql=require("./database/connection");
const cors=require("cors");
const bodyparser=require("body-parser");
app.use(bodyparser.json());
app.use(cors());
app.use(bodyparser.urlencoded({extended:false}));
app.set("views",path.join(__dirname,"view"));
app.set("view engine","hbs")



 app.get("/",(req,res)=>{
    res.render("index");
 })
app.get("/register",(req,res)=>{
   res.render("register");
})
app.get("/update",(req,res)=>{
   res.render("update");
})
app.get("/delete",(req,res)=>{
   res.render("delete");
})

 app.get("/display",(req,res)=>{
    mysql.query("select * from user",(err,result)=>{
        res.render("display",{data:result});
    })

 })
 app.post("/insert",(req,res)=>{

    console.log(req.body.fname+req.body.lname+req.body.email+req.body.password);
    mysql.query(`insert into user values("${req.body.fname}","${req.body.lname}","${req.body.email}","${req.body.password}")`,(err,result)=>{
        
        res.render("index");
    })
 })

 app.post("/edit",(req,res)=>{
    const body=req.body;
    console.log(body.fname+body.lname+body.email);
    mysql.query(`update user 
                 set fname="${body.fname}",lname="${body.lname}" 
                 where email="${body.email}"`,(err,result)=>{
        res.render("index");
    })
 })


 app.post("/delete2",(req,res)=>{
    const body=req.body;
    mysql.query(`delete from user where email="${body.email}"`,(err,result)=>{
        res.render("index");
    })
 })
 app.listen(8000);
 console.log("hi--------hi");

 