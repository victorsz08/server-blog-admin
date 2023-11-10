import { Posts } from "../models/posts.js";
import AdminJS from "adminjs";


export default {
    resource: Posts,
    options: {
        parent:{
            icon:'Layout'
        },
    properties: {
        id: {
            position: 1
        },
        title: {
            position: 2,
            isRequire: true
        },
        image: {
            position: 3,
            isRequire: true
        },
        category: {
            position: 4,
            isRequire: true,
            availableValues: [
                { value: "development", label: "Desenvolvimento Pessoal"},
                { value: "redPill", label: "Red Pill"},
                { value: "fashionMen", label: "Moda Masculina"},
            ]
        },
        content: {
            position: 5,
            isRequire: true,
            type: 'richtext',
        },
        author: {
            position: 6,
            isRequire: true,
        },
        createdAt: {
            position: 7,
            isVisible: {
                list: true, filter: true, show: true, edit: false
            }
        },
        updatedAt: {
            position: 8,
            isVisible: {
                list: true, filter: true, show: true, edit: false
            }
        },
        created_at: {
            isVisible: false
        },
        updated_at: {
            isVisible: false
        }
    },
}
}