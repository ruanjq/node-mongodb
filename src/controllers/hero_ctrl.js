

import heroDao from "../models/hero_models";


export const queryAll = (req,res,next) => {
	heroDao.find().then(result => {
        res.json({ status: 1, msg: 'success',data: result});
	}).catch(function(){
		res.json({ status: 0, msg: 'error' });
	});
}


export const queryById = (req,res,next) => {
	let id = req.params["id"];
	if(!id) return res.json({ status: 0, msg: '缺少ID参数' });
	heroDao.find({id:id}).then((result) => {
        return res.json({ status: 1, msg: 'success',data: result});
	}).catch(err => {
        return res.json({ status: 0, msg: 'error' });
    });
}


export const queryByKeywords = (req,res,next) => {
    let keywords = req.query["keywords"];
    if(!keywords) return res.json({ status: 0, msg: '缺少搜索关键词' });
    const reg = new RegExp(keywords, 'i');
    heroDao.find({name:{$regex : reg}}).then((result) => {
        return res.json({ status: 1, msg: 'success',data: result});
    }).catch(err => {
        return res.json({ status: 0, msg: 'error' });
    });
}

export const updateById = (req,res,next) => {
	let id = req.params["id"];
	let name = req.body["name"];

	if(!id) return res.json({ status: 0, msg: '缺少ID参数' });
    if(!name) return res.json({ status: 0, msg: '缺少name参数' });
	heroDao.update({id:id},{name:name}).then((result) => {
        return res.json({ status: 1, msg: 'success',data: result});
	}).catch(err => {
        return res.json({ status: 0, msg: 'error' });
    });
}


export const deleteById = (req, res, next) => {
    let id = req.params["id"];
    if(!id) return res.json({ status: 0, msg: '缺少ID参数' });
    heroDao.remove({ id: id }).then(docs => {
        return res.json({ status: 1, msg: 'success'});
    }).catch(err => {
        return res.json({ status: 0, msg: 'error'});
    });
};


export const addHero = (req, res, next) => {
    let name = req.body["name"];
    if(!name) return res.json({ status: 0, msg: 'name 值不为空' });
    heroDao.add({ name: name }).then(docs => {
        return res.json({ status: 1, msg: 'success',data:docs});
    }).catch(err => {
        return res.json({ status: 0, msg: '添加失败'});
    });
};