const express= require("express");
const bodyParser= require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.listen(process.env.PORT || 3000, function(){
    console.log("Server is listening");
});

app.get("/", function(req,res){
    res.sendFile(__dirname+"/index.html");
});

app.post("/", function(request, respond){
    const mail=request.body.email;
    const fname=request.body.fname;
    const lname=request.body.lname;
    const password=request.body.password;
    const btn= request.body.btn;
    //console.log("btn= "+btn);
    // if(btn=="yes"){
    //     respond.sendFile(__dirname + "/Thanks.html");
    // }
    respond.sendFile(__dirname + "/Thanks.html");
    console.log("name= "+ fname,lname+" mail= "+mail+" password= "+password);
});

app.post("/thanks", function(req,res){
    res.redirect("/");
});