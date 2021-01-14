const { name } = require("ejs");
const express = require("express");
const app = new express();
const port = process.env.PORT || 5000;

const nav = [{link:'/books',name:'Books'},
             {link:'/authors', name:'Authors'},
             {link:'/addBooks',name:'Add Books'},
             {link:'/login', name:'Login/Signup'},
            
             
            ];
const booksRouter = require('./src/routes/bookRoutes')(nav)
const authorsRouter = require('./src/routes/authorsRoutes')(nav)
const logRouter = require('./src/routes/logRoutes')(nav)
const indexRouter = require('./src/routes/indexRoutes')(nav)


app.use(express.static('./public'));
app.set('view engine','ejs'); 
app.set('views','./src/views');
app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
app.use('/login',logRouter);
app.use('/signup',logRouter);
app.use('/index',indexRouter);

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