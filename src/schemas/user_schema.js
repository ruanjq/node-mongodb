const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;
let Schema = mongoose.Schema;


let UserSchema = new Schema({
    username: String,
    sex:{
        type: Number,
        enum:[1,0],
        default: 1  // 1: 男  0:女
    },
    pwd: String,
    birthday: {
        type: Date,
        default: Date.now(),
    },
    email:{
        type:String,
        default:''
    },
    avatar:{
        type:String,
        default:"/images/default.png"
    },
    meta: {
        createAt: {
            type: Date,
            default: Date.now()
        },
        updateAt: {
            type: Date,
            default: Date.now()
        }
    }
});

UserSchema.pre("save", function(next){

	// 判断文档是否为新
	if(!this.isNew){
		this.meta.updateAt = Date.now();
	}

    bcrypt.genSalt(saltRounds, (err, salt) => {
        if (err) return next(err)
        bcrypt.hash(this.pwd, salt, (err, hash) => {
            // Store hash in your password DB.
            if (err) return next(err);
            this.pwd = hash;
            next();
        });
    });
});

UserSchema.methods = {
    validPassword(_pwd,cb){
        bcrypt.compare(_pwd,this.pwd,(err,isMathch) =>{
            if (err) return next(err);
            cb(isMathch);
        })
    }
}


export default UserSchema;
