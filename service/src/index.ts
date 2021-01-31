import './config/env'
import "reflect-metadata";
import * as express from 'express'
import { createConnection } from "typeorm";
import bodyParser = require('body-parser');
import router from './router/user.router'
var cors = require("cors");


const app = express()

app.use(bodyParser.json())
app.use(router)
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});



createConnection().then(
    connection => {
        // 这里可以写实体操作相关的代码
        console.log('连接成功');

    })
    .catch(error => console.log(error));

app.listen(8000, () => {
    console.log("Express server has started on port 4000. Open http://localhost:4000 to see results");
})