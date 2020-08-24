const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


const UserSchema = mongoose.Schema({
    name : { type : String , require : false },
    admin : { type : Boolean ,  default : 0 },
    email : { type : String , unique : true  ,require : true},
    password : { type : String ,  require : true },
} , { timestamps : true });

UserSchema.pre('save' , function(next) {
    let salt = bcrypt.genSaltSync(15);
    let hash = bcrypt.hashSync(this.password , salt);

    this.password = hash;
    next();
});


UserSchema.methods.comparePassword = async function(password) {
    const compare = await bcrypt.compareSync(password, this.password);
    return compare
}



module.exports = mongoose.model('user' , UserSchema);