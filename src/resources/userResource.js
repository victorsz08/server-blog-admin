import { Users } from "../models/users.js";
import AdminJS from "adminjs";
import bcryptjs from "bcryptjs";




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
            isAccessible: ({currentAdmin}) => currentAdmin.role === "admin",
            handler: async (request, response, context) => {
                return {
                    record: context.record.toJSON(),
                }
            }
        },
        delete: {
            isAccessible: ({currentAdmin}) => currentAdmin.role === 'admin'
        },
        edit: {
            isAccessible: ({currentAdmin}) => currentAdmin.role === 'admin'
        },
        show: {
            isAccessible: ({currentAdmin}) => currentAdmin.role === 'admin'
        },
        filter: {
            isAccessible: ({currentAdmin}) => currentAdmin.role === 'admin'
        },
        list: {
            isAccessible: ({currentAdmin}) => currentAdmin.role === 'admin'
        },
        new: {
            isAccessible: ({currentAdmin}) => currentAdmin.role === 'admin',
            handler: async (request, response, context) => {
                const { name, email, role, password_hash } = request.payload;
                
                try {

                const passHash = await bcryptjs.hash(password_hash, 10)

                const user = await Users.create({
                    name,
                    email,
                    role,
                    password_hash: passHash
                })

                return {
                    record: user,
                    redirectUrl: "/admin/resources/users",
                    notice: {
                        message: "Usuário criado com sucesso",
                        type: "success"
                    }
                }
                } catch (err) {
                    console.log(err)
                    if(err.message === "Validation error"){
                        return {
                            record: err,
                            notice: {
                                message: "Este email já está em uso",
                                type: "error"
                            }
                        }
                    } 

                    return {
                        record: err,
                        message: "Erro interno do servidor",
                        type: "error"
                    }
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
            isRequire: true,
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
            position: 9,
            isVisible: false,
            isRequire: true,
            isVisible: {
                list: false, filter: false, show: false, edit: true
            },

            
        }
    },
}
}