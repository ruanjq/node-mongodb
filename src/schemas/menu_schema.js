const mongoose = require("mongoose");

let Schema = mongoose.Schema;

let MenuSchema = new Schema({
	menu_id:{
		type:Number,
		default:1,
	},
	menu_name:{
		type:String,
		require:true,
		default:""
	},
	menu_level:{
		type:Number,
		default:1
	},
	menu_parent_1:{  // 父一级菜单
		type:Number,
	},
	menu_parent_2:{  // 父二级菜单
		type:Number
	},
	router:{  // 路由名称
		type:String, 
		require:true,
		default:"/"
	},
	template:{   // 模板文件
		type:String,
		require:true
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


MenuSchema.pre('save', function(next) {
	// 判断文档是否为新
	if(!this.isNew){
		this.meta.updateAt = Date.now();
	}
	next();
});


export default MenuSchema;