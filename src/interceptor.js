let interceptor = {};


/**
 * [用户登录拦截验证]
 * @param  {[type]}   req  [description]
 * @param  {[type]}   res  [description]
 * @param  {Function} next [description]
 * @return {[type]}        [description]
 */
interceptor.authorize = (req,res,next) => {
	if(!req.session.user){
		return res.redirect('/user/login');
	}
	next();
}

export default interceptor;