import express from 'express';
import AdminJS from 'adminjs';
import AdminJSSequelize from '@adminjs/sequelize';
import AdminJSExpress from '@adminjs/express';
import 'dotenv/config';

import './database/index.js'

import userResource from './resources/userResource.js';
import postResource from './resources/postResource.js';

const DEFAULT_ADMIN = {
    email: 'admin@example.com',
    password: 'password',
  }


AdminJS.registerAdapter({
    Resource: AdminJSSequelize.Resource,
    Database: AdminJSSequelize.Database
});

const authenticate = async (email, password) => {
    if (email === DEFAULT_ADMIN.email && password === DEFAULT_ADMIN.password) {
      return Promise.resolve(DEFAULT_ADMIN)
    }
    return null
  }

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

const router = AdminJSExpress.buildAuthenticatedRouter(adminJs,
    {
        authenticate,
        cookieName: 'adminjs',
        cookiePassword: 'sessionsecret',
      }
    );

const app = express();

app.use(adminJs.options.rootPath, router);

app.listen(process.env.PORT, () => {
    console.log("Server is running...")
});