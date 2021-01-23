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
const AuthorSchema = new Schema({
    name: String,
    life: String,
    genre: String,
    about:String,
    img: String
});


//create model
var Authordata = mongoose.model('authordata',AuthorSchema);

module.exports = Authordata;