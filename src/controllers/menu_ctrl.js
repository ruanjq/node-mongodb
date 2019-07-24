
import menuDao from '../models/menu_models';


export const getAllMenu = (req,res,next,template) => {
	let queryObj = [{$group:{_id:"$menu_level",menu_level:{$first:"$menu_level"},menu_name:{$first:"$menu_name"},list: { $push: "$$ROOT" }}},{$sort:{menu_level:1}}];
	return menuDao.aggregate(queryObj).then( docs => {
		console.log(docs);
		res.render(template,{
			title:"菜单列表",
			menuList:docs
		});
	}).catch(() => {
		res.render(template,{
			title:"菜单列表"
		});
	});


	function dataFormat(data){
		var result = [];
		// 循环菜单级别类型
		data.forEach((i,item) => {
			if(i == 0){
				item[i].list.forEach((j,nitem) =>{
					result.push(nitem);
				});
			}else{
				item[i].list.forEach((j,nitem) =>{
					result.push(nitem);
				});
			}
		});
		return result;
	}

	var data = {

	}
}

export const saveMenu = (req,res,next) =>{
	let _menu = req.body;
	console.log(_menu);
	menuDao.add(_menu).then(docs => {
		res.redirect("/menu/list")
	}).catch(() => {
		res.redirect("/menu/list")
	});
}

export const deleteMenu = (req,res,next) => {
	let id = req.params["id"];
    if (!id) {
        return res.redirect("/menu/list");
    }else{

    }
}

