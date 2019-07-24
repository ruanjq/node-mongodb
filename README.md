#### 项目描述
- 基于node+mongodb +express+ejs 技术栈搭建的一套完整功能的后台管理系统

### 截图描述

![主页](https://raw.githubusercontent.com/ruanjq/node-mongodb/master/static/images/home.png)

![登录页面](https://raw.githubusercontent.com/ruanjq/node-mongodb/master/static/images/login.png)

![注册页面](https://raw.githubusercontent.com/ruanjq/node-mongodb/master/static/images/register.png)

![用户列表页](https://raw.githubusercontent.com/ruanjq/node-mongodb/master/static/images/userlist.png)


### 项目目录结构

```html
├─dist    // 打包编译后的文件
│          
├─logs    // 日志文件
│      
├─src     // 源码开发链接
│  │  app.js  // 入口执行文件
|  |  ...
│  │  
│  ├─config
│  │      config.dev.js   // 一些配置
│  │      
│  ├─controllers    // 控制器业务层
│  │      home_ctrl.js 
│  │      
│  ├─models    // 数据模型层
│  │      collections.js
│  │      
│  ├─modules  // 通用公共模块
│  ├─routes  // 路由
│  │      router.config.js
│  │      
│  └─schemas   // 数据库表组织结构描述
│          hero_schema.js
│          menu_schema.js
│          user_schema.js
│          
└─static  // 前端静态文件
    ├─assets
    │  ├─css
    │  ├─fonts
    │  ├─images  
    │  └─js
    │          index.js
    │          
    ├─images
    │      default.png  
    |     
    └─views  // 模板路径
	```

### 启动运行
- npm run start  开发+编译模式
- npm run build 生产模式