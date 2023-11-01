import { Users } from "../models/users.js";
import bcryptjs from 'bcryptjs';
import 'dotenv/config'


export const authenticate = async (email, password) => {
    const DEFAULT_ADMIN = {
        email: process.env.DEFAULT_ADMIN_USER,
        password: process.env.DEFAULT_ADMIN_PASS,
        role: "admin"
    }

    const user = await Users.findOne({
        where: {
            email: email
        }
    }) 

    if(!user){
        if(email === DEFAULT_ADMIN.email && password === DEFAULT_ADMIN.password ){
            return Promise.resolve(DEFAULT_ADMIN)
        } 
    }

    const passHash = await bcryptjs.compare(password, user.password_hash)

    if(user && passHash){
        return Promise.resolve(user)
    }
    
    return null
}