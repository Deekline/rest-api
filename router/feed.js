import express from 'express'
import * as feedController from '../controllers/feed.js'

const router = express.Router()

router.get('/items', feedController.getPosts)
router.post('/items', feedController.addPost)


export {router as feedRouter}
