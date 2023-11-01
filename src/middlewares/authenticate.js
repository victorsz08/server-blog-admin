import { Users } from "../models/users.js";
import bcryptjs from 'bcryptjs';



export const authenticate = async (email, password) => {
        const user = await Users.findOne({
            where: {
                email: email
            }
        }) 

        if(!user){
            return null
        }

        const passHash = await bcryptjs.compare(password, user.password_hash)

        if (user && passHash) {
            return Promise.resolve(user)
        }
    
        return null
  }