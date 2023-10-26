import { Users } from "../models/users.js";
import AdminJS from "adminjs";


export default {
    resource: Users,
    options: {
        parent:{
            icon: 'User'
        },
    actions:{
        resetPassword: {
            actionType: 'record',
            icon: "password",
            handler: async (request, response, context) => {
                return {
                    record: context.record.toJSON(),
                }
            }
        }
    },
    properties: {
        id: {
            position: 1
        },
        name: {
            position: 2,
            isRequire: true
        },
        email: {
            position: 3,
            isRequire: true
        },
        role: {
            position: 4,
            isRequire: true,
            availableValues: [
                { value: "admin", label: "Administrador"},
                { value: "manager", label: "Gerente"},
                { value: "author", label: "Autor"},
            ]
        },
        createdAt: {
            position: 5,
            isVisible: {
                list: true, filter: true, show: true, edit: false
            }
        },
        updatedAt: {
            position: 6,
            isVisible: {
                list: true, filter: true, show: true, edit: false
            }
        },
        created_at: {
            position: 7,
            isVisible: false
        },
        updated_at: {
            position: 8,
            isVisible: false
        },
        password_hash: {
            isVisible: false
        }
    },
}
}