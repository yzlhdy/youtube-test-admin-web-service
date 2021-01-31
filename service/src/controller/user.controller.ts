import { Request, Response } from "express";
import { UserEntity } from "../entity";
import * as bcrypt from 'bcryptjs'
import { getRepository } from "typeorm";
import * as jwt from 'jsonwebtoken'

export class UserController {
    public async register(req: Request, res: Response) {
        const { username, password, email, } = req.body as UserEntity
        const hashPassword = await bcrypt.hash(password, 8);

        const user = await getRepository(UserEntity).find({
            where: {
                username
            }
        })
        console.log(user);

        if (user.length !== 0) {
            return res.status(400).json({
                message: '用户已存在'
            })
        }
        const users = await getRepository(UserEntity).create({
            username, password: hashPassword, email
        })
        console.log(users);

        getRepository(UserEntity).save(users);
        return res.send({
            data: users,
            message: '注册成功'
        })
    }
    public async login(req: Request, res: Response) {
        const { username, password } = req.body
        const users = await getRepository(UserEntity).find({
            where: {
                username
            }
        })
        if (users.length === 1) {
            if (!users || !await bcrypt.compare(password, users[0].password)) {

                return res.status(400).json({
                    message: "用户/密码不正确"
                })
            } else {
                const token = jwt.sign({ id: users[0].id }, process.env.APP_SERCRE, {
                    expiresIn: '7d'
                })
                const data = {
                    id: users[0].id,
                    username: users[0].username,
                    email: users[0].email,
                    token
                }
                return res.send({
                    data: data,
                    message: '登陆成功'
                })
            }
        } else {
            return res.status(400).json({
                message: " user not foud"
            })
        }
    }

    public hello(req: Request, res: Response) {
        res.send({
            message: 'hello world'
        })
    }
}