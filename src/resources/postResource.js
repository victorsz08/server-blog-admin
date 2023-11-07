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
            type: 'richtext',
            isRequire: true
        },
        content: {
            position: 4,
            isRequire: true,
            type: 'richtext',
        },
        author: {
            position: 5,
            isRequire: true,
        },
        createdAt: {
            position: 6,
            isVisible: {
                list: true, filter: true, show: true, edit: false
            }
        },
        updatedAt: {
            position: 7,
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