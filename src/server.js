import express from 'express';
import AdminJS from 'adminjs';
import AdminJSSequelize from '@adminjs/sequelize';
import AdminJSExpress from '@adminjs/express';
import 'dotenv/config';

import './database/index.js'

import userResource from './resources/userResource.js';
import postResource from './resources/postResource.js';




AdminJS.registerAdapter({
    Resource: AdminJSSequelize.Resource,
    Database: AdminJSSequelize.Database
});

const adminJs = new AdminJS({
    databases: [],
    rootPath: '/admin',
    resources: [userResource, postResource],
    locale: {
        actions: {
            new: "Criar Novo"
        },
        resources: {
            user: {
                actions: {
                    resetPassword: "Redefinir Senha"
                }
            }
        }
    }
});

const router = AdminJSExpress.buildRouter(adminJs);

const app = express();

app.use(adminJs.options.rootPath, router);

app.listen(process.env.PORT, () => {
    console.log("Server is running...")
});