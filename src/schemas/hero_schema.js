const mongoose = require("mongoose");

let Schema = mongoose.Schema;

let HeroSchema = new Schema({
	id:{
		type:Number,
		default:1,
	},
	name:{
		type:String,
		require:true,
		default:""
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


export default HeroSchema;