import express from 'express'
import * as feedController from '../controllers/feed.js'

const router = express.Router()

router.get('/items', feedController.getItems)
router.post('/items', feedController.addItem)
router.get('/item/:itemId', feedController.getSingleItem)


export {router as feedRouter}
