const multer = require("multer"); // https://github.com/expressjs/multer
const path = require("path");
const md5 = require('md5');
import userDao from "../models/user_models";




export const uploadAvatar = async (req, res) => {
    let storagePath = "/upload";
    let storage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, path.join(__dirname, "../../static", storagePath))
        },
        filename: (req, file, cb) => {
            let type = file.mimetype.split("/")[1];
            file.storagePath = storagePath;
            cb(null, md5(JSON.stringify(file)) + "." + type)
        }
    })
    let fileFilter = async(req, file, cb) => {
        try {
            // 用户信息验证成功,允许上传文件
            let user = await signupValid(req, res);
            cb(null, true)
        } catch (e) {
            // 用户信息验证失败，禁止上传文件
            cb({code:0,data:e},false);
        }

        // cb(new Error('I don\'t have a clue!'))
    }

    let upload = multer({
        storage: storage,
        fileFilter: fileFilter
    }).single('avatar');

    return new Promise((resolve, reject) => {
        upload(req, res, err => {
            // 如果没有头像文件
            if(!req.file){
                signupValid(req, res).then(_user =>{
                    resolve(_user);
                }).catch(msg => {
                    reject(msg)
                });
                return;
            }
            if (err == undefined) {
                // 上传成功
                resolve();
            } else {
                // 禁止上传
                reject(err.data)
            }
        })
    });
};


const signupValid = (req, res) => {
    return new Promise((resolve, reject) => {
        let _user = req.body;
        if (_user.username == null || _user.username == "") {
            reject("用户名不为空!");
        }
        if (_user.pwd == null || _user.pwd == "") {
            reject("密码不为空!");
        }
        if (_user.sex == null || _user.sex == "") {
            reject("性别不为空!");
        }
        if (_user.birthday == null || _user.birthday == "") {
            reject("生日不为空!");
        }

        _user.birthday = new Date(_user.birthday).getTime();
        userDao.findOne({ username: _user.username }).then(docs => {
            if (!docs) {
                resolve(_user);
            } else {
                reject("该用户名已注册,请重新输入!");
            };
        }).catch(err => {
            reject("注册失败,请稍后再试!");
        });
    });
};


export const signup = (req, res, next) => {

    uploadAvatar(req, res).then( () => {
        let _user = req.body;
        _user.birthday = new Date(_user.birthday).getTime();
        if(req.file){
            let _file = req.file;
            _user.avatar = _file.storagePath + "/" + _file.filename;
        }
        userDao.add(_user).then(data => {
            login(req, res);
        })
    }).catch(errMsg => {
        res.json({ status: 0, msg: errMsg });
    });
}


export const login = (req, res) => {
    let params = req.body;
    if (params.username == null || params.username == "") {
        return res.json({ status: 0, msg: '用户名不为空!' });
    }
    if (params.pwd == null || params.pwd == "") {
        return res.json({ status: 0, msg: '密码不为空!' });
    }
    userDao.findOne({ username: params.username }).then(docs => {
        if (docs) {
            docs.validPassword(params.pwd, isCheck => {
                if (isCheck) {
                    req.session.user = docs;
                    return res.json({ status: 1, msg: '登录成功' });
                } else {
                    return res.json({ status: 0, msg: '账号或密码错误' });
                }
            });
        } else {
            res.json({ status: 0, msg: '账号或密码错误' });
        }
    }).catch(err => {
        return res.json({ status: 0, msg: '登录失败' });
    })
}


export const logout = (req, res) => {
    res.clearCookie('USER_ID');
    req.session.destroy(err => {
        res.redirect('/');
    });

}

export const findAllUser = (req, res, next, template) => {

    userDao.find(false, (err, result) => {
        if (err) {
            console.log(err);
        }
        // console.log(result)
        res.render(template, { title: 'Express', userList: result });
    })
}


export const deleteUser = (req, res, next) => {
    let id = req.params["id"];
    if (!id) {
        return res.redirect("/user/list");
    }
    userDao.remove({ _id: id }).then(docs => {
        res.redirect("/user/list");
    }).catch(err => {
        res.redirect("/user/list");
    });
};