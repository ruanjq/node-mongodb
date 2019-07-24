import interceptor from "../interceptor";

import { signup, login, logout, findAllUser, deleteUser } from "../controllers/user_ctrl";
import { home } from "../controllers/home_ctrl";
import { getAllMenu, saveMenu, deleteMenu } from "../controllers/menu_ctrl";
import { queryAll, queryById, updateById, deleteById, addHero ,queryByKeywords} from "../controllers/hero_ctrl";
let router = (router, app) => {

    router.use((req, res, next) => {
        // 设置跨域请求
        // Website you wish to allow to connect
        res.setHeader('Access-Control-Allow-Origin', '*');

        // Request methods you wish to allow
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        res.removeHeader("X-Powered-By");
        // Request headers you wish to allow
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

        // Set to true if you need the website to include cookies in the requests sent
        // to the API (e.g. in case you use sessions)
        res.setHeader('Access-Control-Allow-Credentials', true);


        // Pass to next layer of middleware
        if (req.session.user) {
            res.locals.user = req.session.user;
        }
        next();

    });


    /* GET home page. */
    router.get('/', interceptor.authorize, (req, res, next) => {
        home(req, res, next, "index");
    });

    router.post("/add/user", signup);

    router.post("/signin", login);

    router.get("/logout", logout);

    router.get("/user/list", interceptor.authorize, (req, res, next) => {
        findAllUser(req, res, next, "user_list");
    });

    router.get("/user/remove/:id", interceptor.authorize, deleteUser)

    router.get("/user/login", (req, res, next) => {
        res.render("login_signin", { title: "用户登录" })
    })

    router.get("/user/signup", (req, res, next) => {
        res.render("login_registration", { title: "用户注册" })
    })


    router.get('/menu/list', interceptor.authorize, (req, res, next) => {
        getAllMenu(req, res, next, "menu_list");
    });

    router.get('/menu/add', interceptor.authorize, (req, res, next) => {
        res.render("menu_add", { title: "添加菜单" })
    });

    router.post('/menu/add', interceptor.authorize, (req, res, next) => {
        saveMenu(req, res, next);
    });

    router.get("/menu/remove/:id", interceptor.authorize, deleteMenu)


    // hero rouer
    router.get("/hero/list", queryAll);
    router.get("/hero/search", queryByKeywords);
    router.get("/hero/detail/:id", queryById);
    router.post("/hero/detail/:id", updateById);
    router.post("/hero/add", addHero);
    router.delete("/hero/remove/:id", deleteById);



    router.get('*', function(req, res) {
        res.render('utilities_error_404', {
            status: 404,
            title: '404 Not a Found',
        });
    });


    app.use('/', router);


}





export default router;