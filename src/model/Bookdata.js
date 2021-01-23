//Access Mongoose package
const mongoose = require("mongoose");

//connect to db
mongoose.connect('mongodb+srv://kripasaji:kripasaji@fsdlibrary.magey.mongodb.net/LibraryApp?retryWrites=true&w=majority',
{
    useNewUrlParser: true,
    useUnifiedTopology: true
    
});

//schema def
const Schema = mongoose.Schema;
const BookSchema = new Schema({
    title: String,
    author: String,
    genre: String,
    about:String,
    img: String
});


//create model
var Bookdata = mongoose.model('bookdata',BookSchema);

module.exports = Bookdata;