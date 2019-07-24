
const mongoose = require('mongoose');
const express = require("express");
const session    = require('express-session');
const MongoStore = require('connect-mongo')(session);
const autoIncrement = require('mongoose-auto-increment');
import COLLECTIONS from "./models/collections";

// 设置全局promise ，防止mongoose promise 报错
// mongoose.Promise = global.Promise;
let db = mongoose.connection;
autoIncrement.initialize(db);
const db_config = {
    DATABASE: "windhome",
    USER: "windhome",
    PWD: "windhome",
    HOSTS: '127.0.0.1',
    PORT: "27017",
    DB_CONN_STR() {
        return `mongodb://${this.USER}:${this.PWD}@${this.HOSTS}:${this.PORT}/${this.DATABASE}`;
    }
}

db.on('error', error =>{
    console.error.bind(console, '... connection error ...');
    mongoose.disconnect();
});

db.once('open', function callback() {
    console.info("... db open ...");
});

mongoose.connection.openUri(db_config.DB_CONN_STR());



// close db.close()

// session store
db.mongoStore = new MongoStore({
    url: db_config.DB_CONN_STR(),
    collection: COLLECTIONS.session
})

export default db;