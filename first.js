const express=require("express");
const app=express();
app.get("/",function(req,res){
  res.send("hello")
})
app.get("/contact",function(req,res){
  res.send("48657845937")
});
app.get("/about",function(req,res){
  res.send("i m prety decent dancer");
})
app.listen(3000,function(){
  console.log("my server port is 3000");
})
