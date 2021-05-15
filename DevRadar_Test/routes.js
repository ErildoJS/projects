import express from 'express'
const routes = express.Router()
import axios from './services/api'
import SessionController from './controllers/SessionController'


routes.post('/sessions', SessionController.store)

export default routes

