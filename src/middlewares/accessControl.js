import { Users } from "../models/users.js"

export const someResource = {
    resource: Users,
    options: {
        actions: {
            new: {
                isAccessible: ({currentAdmin}) => console.log(currentAdmin.role)

            }
        }
    }
}