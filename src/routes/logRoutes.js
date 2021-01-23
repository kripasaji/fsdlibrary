const express = require("express");
const logRouter =  express.Router();
const Registerdata = require('../model/Registerdata');
let alert = require("alert");  



function rout(nav){
    
    logRouter.get('/',function(req,res){
        res.render('login',{
            nav,
            title: 'Login'
        })
    })
    //login check
    logRouter.post('/login', function(req,res){
        try{
            const Email = req.body.email;
            const Pass =req.body.pass;
            Registerdata.findOne({email:Email}, function(err, user) {
                console.log(user);
                if(user===null){
                   alert("Invalid Login details");
                } else if(user.pass === Pass) {
                    // res.send("success")
                    res.render("index",{
                        nav,
                        title: 'Library'
                    })
                } else {
                    alert("Username or Password not matching"); 
                }
            });
        }
        catch(error){
            res.status(400).alert("Invalid Login Details",error)
        }
    });


    return logRouter;
}

module.exports = rout;



