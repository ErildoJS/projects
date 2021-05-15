import express from 'express'
const routes = express.Router()
import axios from './services/api'
import SessionController from './controllers/SessionController'
import SpotController from './controllers/SpotController'
import multer from 'multer'
import uploadConfig from './config/upload'

const upload = multer(uploadConfig)
routes.post('/sessions', SessionController.store)
routes.post('/spots', upload.single('thumbnail'), SpotController.store)

export default routes

