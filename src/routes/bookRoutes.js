const express = require("express");
const booksRouter = express.Router();
const Bookdata = require('../model/Bookdata');
function router(nav){

    booksRouter.get('/',function(req,res){
            Bookdata.find()
            .then(function(books){
                res.render("books",{
                    nav,
                    title:'Books',
                    books
            })
           
        })
    });
    
    booksRouter.get('/:id',function(req,res){
         const id = req.params.id;
         Bookdata.findOne({_id:id})
         .then(function(book){
            res.render('book',{
                nav,
                title:'Library',
                book
         })
         
         })
    });

    booksRouter.post('/updatebook/:_id',function(req,res){
        const id = req.params._id;
        const newData = {
            title: req.body.title,
            author:req.body.author,
            genre:req.body.genre,
            about: req.body.about,
            img: req.body.img
        }
        Bookdata.findByIdAndUpdate(id,newData,function(err,book){
            if(err) console.log(err);
            else{
                console.log(book)
                // res.send({message:"Updation Successful"});
            } 
        })
        Bookdata.find()
            .then(function(books){
                res.render("books",{
                    nav,
                    title:'Books',
                    books
            })
    })
})

    booksRouter.post('/updateform/:_id',function(req,res){
        const bookid = req.params._id;
        res.render("updatebook",{
            nav,
            title:'Update',
            bookid
        })  
    })
   

    booksRouter.post('/delete/:_id',function(req,res){
        const id =  req.params._id;
        Bookdata.findByIdAndDelete(id,function(err,book){
            if(err) console.log(err);
            else console.log(book);
        })
            // res.send({message:"Delete Successful!"});
            Bookdata.find()
            .then(function(books){
                res.render("books",{
                    nav,
                    title:'Books',
                    books
            })
        })
        })
    
    
    return booksRouter;

}

module.exports = router;