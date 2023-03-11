const mongoose = require('mongoose');
let uniqueValidator = require('mongoose-unique-validator');

let rol = {
    values : ['ADMIN','USER'],
    message : '{VALUE} invalid rol'
}
let Schema = mongoose.Schema;

let userSchema = new Schema({
    email:{
        type : String,
        required : [true]
    },
    username:{
        type : String,
        required : [true]
    },
    password:{
        type : String,
        required : [true]
    },
    phone:{
        type : String,
        required : [true]
    },
    role:{
        type : String,
        default: 'USER',
        required:[true],
        enum:rol
    },

});

userSchema.methods.toJSON = function(){
    let user = this;
    let userObject = user.toObject();
    delete userObject.password;
    return userObject;
}

userSchema.plugin(uniqueValidator,{
    message:'{PATH} unique'
})
module.exports = mongoose.model('User', userSchema);