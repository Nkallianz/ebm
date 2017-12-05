let mongoose = require('mongoose');
let userSchema = new mongoose.Schema({

    email:{
        type:String,
        unique:true,
        require:true,
        trim:true
    },
        username:{
            type:String,
            unique:true,
            required:true,
            trim:true
        },
        password:{
            type:String,
            require:true,
            trim:true
        },
        passwordConf:{
            type:String,
            required:true,
            trim:true
        }
});

let User = mongoose.model('User',userSchema);
module.exports =  User;