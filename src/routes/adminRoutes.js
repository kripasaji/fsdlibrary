const express = require("express");
const adminRouter = express.Router();
const Bookdata = require('../model/Bookdata');

function router(nav){
    adminRouter.get('/',function(req,res){
        res.render('admin',{
            nav,
            title: 'Add A Book'
        })
    })

    adminRouter.post('/add-book', function(req,res){
        var item = {
        title :req.body.title,
        author: req.body.author,
        genre: req.body.genre,
        about: req.body.about,
        img: req.body.img

        }
        
        var book = Bookdata(item);
        book.save();//save to db
        res.redirect('/books');
        
    });

    return adminRouter;
}

module.exports = router;