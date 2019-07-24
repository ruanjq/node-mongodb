"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var mongoose=require("mongoose"),Schema=mongoose.Schema,MenuSchema=new Schema({menu_id:{type:Number,default:1},menu_name:{type:String,require:!0,default:""},menu_level:{type:Number,default:1},menu_parent_1:{type:Number},menu_parent_2:{type:Number},router:{type:String,require:!0,default:"/"},template:{type:String,require:!0},meta:{createAt:{type:Date,default:Date.now()},updateAt:{type:Date,default:Date.now()}}});MenuSchema.pre("save",function(e){this.isNew||(this.meta.updateAt=Date.now()),e()}),exports.default=MenuSchema;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjaGVtYXMvbWVudV9zY2hlbWEuanMiXSwibmFtZXMiOlsibW9uZ29vc2UiLCJyZXF1aXJlIiwiU2NoZW1hIiwiTWVudVNjaGVtYSIsIm1lbnVfaWQiLCJ0eXBlIiwiTnVtYmVyIiwiZGVmYXVsdCIsIm1lbnVfbmFtZSIsIm1lbnVfcGFyZW50XzEiLCJtZW51X2xldmVsIiwiU3RyaW5nIiwibWVudV9wYXJlbnRfMiIsInJvdXRlciIsIm1ldGEiLCJ0ZW1wbGF0ZSIsIkRhdGUiLCJub3ciLCJ1cGRhdGVBdCIsInByZSIsIm5leHQiLCJ0aGlzIiwiaXNOZXciXSwibWFwcGluZ3MiOiJvRUFBQSxJQUFNQSxTQUFXQyxRQUFRLFlBRXJCQyxPQUFTRixTQUFTRSxPQUVsQkMsV0FBYSxJQUFJRCxRQUpyQkUsU0FNRUMsS0FBS0MsT0FKUEMsUUFBSUwsR0FFSk0sV0FDQ0osS0FBQUEsT0FDQ0MsU0FBS0MsRUFDTEMsUUFBQUEsSUFFREMsWUFDQ0gsS0FBQUEsT0FDQUosUUFBQUEsR0FGU1EsZUFLVkMsS0FBQUEsUUFFQ0gsZUFaMEJGLEtBQUFDLFFBZTFCRCxRQWYwQkEsS0FBQU0sT0FpQjNCQyxTQUFBQSxFQUNDUCxRQUFLQyxLQUVOTyxVQUNDUixLQUFBQSxPQUNBSixTQUFBQSxHQUZNYSxNQUtQQyxVQUNNSixLQURHSyxLQUVBVCxRQUFBUyxLQUFBQyxPQUVIQyxVQUNXYixLQUFBVyxLQUNBQSxRQURBQSxLQUFBQyxVQUlBZCxXQUFBZ0IsSUFBQSxPQUFBLFNBQUFDLEdBbENsQkMsS0FBQUMsUUE2Q0VELEtBQUtQLEtBQUtJLFNBQVdGLEtBQUtDLE9BRjNCRyxzQkFJQUEiLCJmaWxlIjoic2NoZW1hcy9tZW51X3NjaGVtYS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG1vbmdvb3NlID0gcmVxdWlyZShcIm1vbmdvb3NlXCIpO1xyXG5cclxubGV0IFNjaGVtYSA9IG1vbmdvb3NlLlNjaGVtYTtcclxuXHJcbmxldCBNZW51U2NoZW1hID0gbmV3IFNjaGVtYSh7XHJcblx0bWVudV9pZDp7XHJcblx0XHR0eXBlOk51bWJlcixcclxuXHRcdGRlZmF1bHQ6MSxcclxuXHR9LFxyXG5cdG1lbnVfbmFtZTp7XHJcblx0XHR0eXBlOlN0cmluZyxcclxuXHRcdHJlcXVpcmU6dHJ1ZSxcclxuXHRcdGRlZmF1bHQ6XCJcIlxyXG5cdH0sXHJcblx0bWVudV9sZXZlbDp7XHJcblx0XHR0eXBlOk51bWJlcixcclxuXHRcdGRlZmF1bHQ6MVxyXG5cdH0sXHJcblx0bWVudV9wYXJlbnRfMTp7ICAvLyDniLbkuIDnuqfoj5zljZVcclxuXHRcdHR5cGU6TnVtYmVyLFxyXG5cdH0sXHJcblx0bWVudV9wYXJlbnRfMjp7ICAvLyDniLbkuoznuqfoj5zljZVcclxuXHRcdHR5cGU6TnVtYmVyXHJcblx0fSxcclxuXHRyb3V0ZXI6eyAgLy8g6Lev55Sx5ZCN56ewXHJcblx0XHR0eXBlOlN0cmluZywgXHJcblx0XHRyZXF1aXJlOnRydWUsXHJcblx0XHRkZWZhdWx0OlwiL1wiXHJcblx0fSxcclxuXHR0ZW1wbGF0ZTp7ICAgLy8g5qih5p2/5paH5Lu2XHJcblx0XHR0eXBlOlN0cmluZyxcclxuXHRcdHJlcXVpcmU6dHJ1ZVxyXG5cdH0sXHJcblx0bWV0YToge1xyXG4gICAgICAgIGNyZWF0ZUF0OiB7XHJcbiAgICAgICAgICAgIHR5cGU6IERhdGUsXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IERhdGUubm93KClcclxuICAgICAgICB9LFxyXG4gICAgICAgIHVwZGF0ZUF0OiB7XHJcbiAgICAgICAgICAgIHR5cGU6IERhdGUsXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IERhdGUubm93KClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuXHJcbk1lbnVTY2hlbWEucHJlKCdzYXZlJywgZnVuY3Rpb24obmV4dCkge1xyXG5cdC8vIOWIpOaWreaWh+aho+aYr+WQpuS4uuaWsFxyXG5cdGlmKCF0aGlzLmlzTmV3KXtcclxuXHRcdHRoaXMubWV0YS51cGRhdGVBdCA9IERhdGUubm93KCk7XHJcblx0fVxyXG5cdG5leHQoKTtcclxufSk7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVudVNjaGVtYTsiXX0=
