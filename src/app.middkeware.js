import express from 'express'
import cors from 'cors'
import requestInfoMiddlewere from './middlenwere/request-info.middleware.js'
import humpsMiddleware from './middlenwere/humps.middleware.js'

const AppMiddleware = express()

AppMiddleware.use(express.urlencoded({ extended: true}))
AppMiddleware.use(express.json())
AppMiddleware.use(cors())
AppMiddleware.use(requestInfoMiddlewere())
AppMiddleware.use(humpsMiddleware())

export default AppMiddleware
