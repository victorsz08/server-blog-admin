import express from 'express';
import AdminJS from 'adminjs';
import AdminJSSequelize from '@adminjs/sequelize';
import AdminJSExpress from '@adminjs/express';
import 'dotenv/config';
import cors from 'cors';

import './database/index.js';
import { authenticate } from './middlewares/authenticate.js';
import { locale } from './resources/translations.js';
import { dark } from '@adminjs/themes';

import userResource from './resources/userResource.js';
import postResource from './resources/postResource.js';
import routes from './api/routes.js';


AdminJS.registerAdapter({
    Resource: AdminJSSequelize.Resource,
    Database: AdminJSSequelize.Database
});



const adminJs = new AdminJS({
    databases: [],
    rootPath: '/admin',
    resources: [userResource, postResource],
    defaultTheme: dark.id,
    availableThemes: [dark],
    locale,
});

const router = AdminJSExpress.buildAuthenticatedRouter(adminJs,
    {
        authenticate,
        cookie: {
        httpOnly: process.env.DB_NAME === 'production',
        secure: process.env.DB_NAME === 'production',
        },
        cookieName: 'adminBlog',
        cookiePassword: process.env.SECRET+'sessionsecret',
      }
    );

const app = express();

app.use(adminJs.options.rootPath, router);

routes(app)

app.use(cors({
    origin: process.env.ORIGIN_HTTP,
    methods: 'GET,POST,DELETE,PUT',
    allowedHeaders: '*',
    optionsSuccessStatus: '200'
}))

app.get('/', (request, response) => {
    response.json("Bem-Vindo a API BLOG - by VictorS")
})

app.listen(process.env.PORT, () => {
    console.log(`Server is running in http://localhost:${process.env.PORT}${adminJs.options.rootPath}`)
});