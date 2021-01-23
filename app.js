const { name } = require("ejs");
const express = require("express");
const path = require("path");
const app = new express();

const port = process.env.PORT || 4000;
const static_path = path.join(__dirname,"./public")
const bodyParser = require('express').json;

const nav = [{link:'/books',name:'Books'},
             {link:'/authors', name:'Authors'},
             {link:'/admin',name:'Add Book'},
             {link:'/addAuthor',name:'Add Author'},
             {link:'/signup', name:'Login/Signup'},
            ];
            
const booksRouter = require('./src/routes/bookRoutes')(nav)
const authorsRouter = require('./src/routes/authorsRoutes')(nav)
const logRouter = require('./src/routes/logRoutes')(nav)
const indexRouter = require('./src/routes/indexRoutes')(nav)
const adminRouter = require('./src/routes/adminRoutes')(nav)
const regRouter = require('./src/routes/regRoutes')(nav)
const adauthorRouter = require('./src/routes/adauthorRoutes')(nav)

app.use(bodyParser());
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(static_path));
app.set('view engine','ejs'); 
app.set('views','./src/views');
app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
app.use('/login',logRouter);
// app.use('/signup',logRouter);
app.use('/index',indexRouter);
app.use('/admin',adminRouter);
app.use('/addAuthor',adauthorRouter);
app.use('/signup',regRouter);

app.get('/',function(req,res){
    res.render("index",
    {
       nav,
        title:'Library'
    });
});  

app.get('/login', function(req,res){
    res.render("login", {
        nav,
        title:'Login'
    })
});


app.get('/signup', function(req,res){
    res.render("signup", {
        nav,
        title:'Signup'
    })
});

app.get('/index', function(req,res){
    res.render("index", {
        nav,
        title:'Home'
    })
});



app.get('/addBooks', function(req,res){
    res.render("addBook", {
        nav,
        title:'Add Book'
    })
});


 

app.listen(port,()=>{console.log("Server Ready at "+port)});