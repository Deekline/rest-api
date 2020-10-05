import express from 'express';
import bodyParser from 'body-parser';
import {feedRouter} from './router/feed.js';
import {authRouter} from './router/auth.js';

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type', 'Authorization')
    next()
})

app.use('/feed', feedRouter);
app.use('/auth', authRouter)

app.use((error, req, res, _next) => {

    console.log(error)

    const status = error.statusCode || 500
    const message = error.message

    res.status(status).json({
        message: message
    })

})

app.listen(8080)

export {app}
