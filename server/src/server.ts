import express from 'express'
import cors from 'cors'
import { routes } from 'routes'

const app = express()

const SERVER_PORT = process.env.PORT || 3333
const payloadLimit = { limit: '50mb', extended: true }

app.use(cors())
app.use(express.json(payloadLimit))
app.use(express.urlencoded(payloadLimit))
app.use(express.json())
app.use(routes)

app.listen(SERVER_PORT, () => {
  console.log(`HTTP Server running on port: ${SERVER_PORT}`)
})