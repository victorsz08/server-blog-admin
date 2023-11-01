import bodyParser from 'body-parser';


import posts from './routes/postRouter.js';

export default (app) => {
    app.use(
        bodyParser.json(),
        posts
    )
}