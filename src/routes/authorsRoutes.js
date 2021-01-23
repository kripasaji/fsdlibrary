const express = require("express");
const authorsRouter = express.Router();
const Authordata = require('../model/Authordata');

function route(nav){
   
    
    authorsRouter.get('/',function(req,res){
        Authordata.find()
        .then(function(authors){
            res.render("authors",{
                nav,
                title:'Authors',
                authors
            });
        });
        
    });

    authorsRouter.get('/:id',function(req,res){
        const id = req.params.id;
        Authordata.findOne({_id:id})
        .then(function(author){
            res.render("author",{
                nav,
                title:'Library',
                author
            })
        }) 
    });

    authorsRouter.post('/updateAuthor/:_id',function(req,res){
        const id = req.params._id;
        const newData = {
            name: req.body.name,
            life:req.body.life,
            genre:req.body.genre,
            about: req.body.about,
            img: req.body.img
        }
        Authordata.findByIdAndUpdate(id,newData,function(err,author){
            if(err) console.log(err);
            else{
                console.log(author)
                // res.send({message:"Updation Successful"});
            } 
        })
        Authordata.find()
            .then(function(authors){
                res.render("authors",{
                    nav,
                    title:'Authors',
                    authors
            })
    })
})

    authorsRouter.post('/updateform/:_id',function(req,res){
        const authorid = req.params._id;
        res.render("updateAuthor",{
            nav,
            title:'Update',
            authorid
        })  
    })
   

    authorsRouter.post('/delete/:_id',function(req,res){
        const id =  req.params._id;
        Authordata.findByIdAndDelete(id,function(err,author){
            if(err) console.log(err);
            else console.log(author);
        })
            // res.send({message:"Delete Successful!"});
            Authordata.find()
            .then(function(authors){
                res.render("authors",{
                    nav,
                    title:'Authors',
                    authors
            })
        })
    })

   return authorsRouter;

}

module.exports = route;
