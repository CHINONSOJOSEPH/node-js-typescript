import from'dotenv'.config()
import bcrypt from 'bcrypt';
import  jwt from'jsonwebtoken'

import userService from '../services/user.service'
import {Request,Response} from 'express'

class UserController {
    //create a user
    async createUser(req:Request,res: Response) {
        const userData = req.body

        const existingUser = await userService.getOne({username : userData.username});
        if (existingUser)
        return res.status(403).json({
            success : false,
            message : "username already exists!"
        })
        bcrypt.hash(req.body.password, 10, async function (err, hash) {
            if (err) {
                return res.status(400).json({
                    success : false,
                    message : "please try again"
                });
            }
            userData.password = hash
            const createdUser = await userService.create(userData)
            //Generate JWT token
            const token =jwt.sign({ id: createdUser._id,
            role: createdUser.role},
            process.env.SECRET_KEY);
             res.status(201).cookie('token', token).json({
                sucess : true,token,
                message : "user created successfully",
                data: { name:createdUser.username,
                role:createdUser.role}
             });
               
        });
    }
}