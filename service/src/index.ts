import './config/env'
import "reflect-metadata";
import * as express from 'express'
import { createConnection } from "typeorm";


const app = express()


createConnection().then(
    connection => {
        // 这里可以写实体操作相关的代码
        console.log('连接成功');

    })
    .catch(error => console.log(error));

app.listen(8000, () => {
    console.log("Express server has started on port 4000. Open http://localhost:4000 to see results");
})