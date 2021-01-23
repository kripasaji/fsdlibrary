const express = require("express");
const adauthorRouter = express.Router();
const Authordata = require('../model/Authordata');

function router(nav){
    adauthorRouter.get('/',function(req,res){
        res.render('addAuthor',{
            nav,
            title: 'Add An Author'
        })
    })

    adauthorRouter.post('/add-author', function(req,res){
        var item = {
        name :req.body.name,
        life: req.body.life,
        genre: req.body.genre,
        about: req.body.about,
        img: req.body.img

        }
        
        var author = Authordata(item);
        author.save();//save to db
        res.redirect('/authors');
        
    });

    return adauthorRouter;
}

module.exports = router;