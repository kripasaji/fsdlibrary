//Access Mongoose package
const mongoose = require("mongoose");

//connect to db
mongoose.connect('mongodb+srv://kripasaji:kripasaji@fsdlibrary.magey.mongodb.net/LibraryApp?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(()=>{
    console.log(`Connection successfull`);
}).catch((e)=>{
    console.log(`Connection unsuccessfull`);
});

//schema def
const Schema = mongoose.Schema;
const RegisterSchema = new Schema({
    Name : {
        type:String,
        required:true
    } ,
    email : {
        type:String,
        required:true,
        unique: true
    } ,
    pass : {
        type:String,
        required:true,
        
    } ,
    cpass:{
        type:String,
        required:true
    } ,
    number: {
        type:Number,
        required:true,
        unique:true
    }
});


//create model
var Registerdata = mongoose.model('regdata',RegisterSchema);

module.exports = Registerdata;