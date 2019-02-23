var express = require('express');
var bodyparser = require('body-parser');
const path = require('path');
var app = express();
var fs = require('fs');
app.use(bodyparser.urlencoded({ extended: false}));

app.get('/', (req,res)=>{

    //onsole.log(__dirname);
    
    res.sendFile(path.join(__dirname, "index1.html"));
    
})




app.post("/confirm",(req, res)=>{
    console.log("inside post");
   // console.log(req.body);
    let name = req.body.name;
    let email = req.body.email;
    let pass = req.body.password;
    let cpass = req.body.cpassword;
    const data = {
        name: name,
        email: email,
        password: pass,
        conpass: cpass
    };
    var abc=JSON.parse(data);

        if(pass===cpass){
              fs.appendFile("aaa.json",abc,function(err){
                if(err){
                    throw err
                }else {
                    res.send(abc);
                }
            console.log('login successfully');
            })
        } 
        else {
            
            console.log("mismatch password");
        }
    })
 app.listen(3000);
 console.log('server is running');