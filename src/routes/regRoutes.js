const express = require("express");
const regRouter = express.Router();
const Registerdata = require('../model/Registerdata');

function router(nav){
    regRouter.get('/',function(req,res){
        res.render('signup',{
            nav,
            title: 'Signup'
        })
    })

    regRouter.post('/register', async(req,res)=>{
        try{
            const pass= req.body.pass;
            const cpass= req.body.cpass;
            if(pass===cpass)
            {
                const registeruser = new Registerdata({
                    Name :req.body.Name,
                    email: req.body.email,
                    pass: req.body.pass,
                    cpass: req.body.cpass,
                    number: req.body.mob
                })

                 await registeruser.save();
                res.status(201).render("login",{
                    nav,
                    title: 'Login'
                })

            }
            else
            {
                res.send("passwords not matching");
            }
        }
        catch(error)
        {
            res.status(400).send(error);
        }
        
        
        
        
    });

    return regRouter;
}

module.exports = router;
