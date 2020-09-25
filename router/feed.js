import express from 'express'
import * as feedController from '../controllers/feed.js'

const router = express.Router()

router.get('/items', feedController.getItems)
router.post('/items', feedController.addItem)


export {router as feedRouter}
