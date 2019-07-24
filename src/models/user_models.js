const mongoose = require("mongoose");
import UserSchema from "../schemas/user_schema";
import COLLECTIONS from "./collections"

let User = mongoose.model(COLLECTIONS.user,UserSchema);  // collec_users  表示数据库集合名称，存到数据库名称为小写

let userDao = {};

userDao.find = function(parms = false,cb){
	if(parms == false) User.find().exec(cb);
	else User.find(parms).exec(cb)
}

userDao.findOne = params => {
	return new Promise((resolve, reject) => {
		User.findOne(params, (err,docs) => {
			if(err){
				reject(err);
			} else{
				resolve(docs);
			}
		});
	});
}


userDao.remove = params => {
	return new Promise((resolve, reject) => {
		User.remove(params,(err,docs) => {
			if(err) return reject(err)
			else{
				if(docs.result.ok == 1){
					resolve(docs);
				}else{
					reject(docs);
				}
				
			}
		});
	});
}


userDao.add = function(user){
	return new Promise((resolve, reject) => {
		User.create(user, function (err, res) {
			if (err){
				reject(err);
				return handleError(err)
			};
		  	// saved!
		  	resolve(res);
		})
	});
};



export default userDao