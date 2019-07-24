const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");
import MenuSchema from "../schemas/menu_schema";
import COLLECTIONS from "./collections";


MenuSchema.plugin(autoIncrement.plugin,{
    model: COLLECTIONS.menu,
    field: 'menu_id',
    startAt: 1,
    incrementBy: 1
});

let Menu = mongoose.model(COLLECTIONS.menu,MenuSchema);

let menuDao = {};

menuDao.find = (param = {}) => {
	let _query = Menu.find(param);
	return _query.exec();
};

menuDao.aggregate = (param = []) => {
	let _query = Menu.aggregate(param);
	return _query.exec();
};

menuDao.add = params => {
	return Menu.create(params);	
}

menuDao.remove = params => {
	return Menu.deleteOne(params);
}

export default menuDao;