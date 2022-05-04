import express from 'express'
import { prisma } from './prisma'
import { Response } from './types/response'

const app = express()

const PORT = process.env.SERVER_PORT || 3333

app.use(express.json())

app.post('/feedbacks', async (req, res) => {
  const { type, comment, screenshot } = req.body

  const feedback = await prisma.feedback.create({
    data: { 
      type, 
      comment, 
      screenshot 
    }
  })
  return res.status(201).json({ data: feedback } as Response)
})

app.listen(PORT, () => {
  console.log(`HTTP Server running on port: ${PORT}`)
})