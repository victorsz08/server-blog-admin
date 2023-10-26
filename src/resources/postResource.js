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
        content: {
            position: 3,
            isRequire: true,
            type: 'richtext',
        },
        author: {
            position: 4,
            isRequire: true,
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
            isVisible: false
        },
        updated_at: {
            isVisible: false
        }
    },
}
}