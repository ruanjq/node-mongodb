const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");
import HeroSchema from "../schemas/hero_schema";
import COLLECTIONS from "./collections"

HeroSchema.plugin(autoIncrement.plugin,{
    model: COLLECTIONS.hero,
    field: 'id',
    startAt: 1,
    incrementBy: 1
});

let Hero = mongoose.model(COLLECTIONS.hero,HeroSchema);  

let heroDao = {};

heroDao.find = function(params){
	return new Promise((resolve, reject) => {
		Hero.find(params,(err,docs) => {
			if(err){
				reject(err);
			} else{
				resolve(docs);
			}
		})
	});
}

heroDao.findOne = params => {
	return new Promise((resolve, reject) => {
		Hero.findOne(params, (err,docs) => {
			if(err){
				reject(err);
			} else{
				resolve(docs);
			}
		});
	});
}

heroDao.update = (conditions,params) => {
	return new Promise((resolve, reject) => {
		Hero.update(conditions,params,(err,docs) => {
			if (err){
				return reject();
			}
			resolve(docs);
		});
	});
}


heroDao.remove = params => {
	return new Promise((resolve, reject) => {
		Hero.remove(params,(err,docs) => {
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


heroDao.add = function(hero){
	return new Promise((resolve, reject) => {
		Hero.create(hero, function (err, res) {
			if (err){
				return reject(err);
			};
		  	// saved!
		  	resolve(res);
		})
	});
};



export default heroDao;