import express from 'express'

import { NodemailerAdapter } from 'adapters/nodemailer/NodemailerAdapter'
import { PrismaFeedbacksRepository } from 'repositories/prisma/PrismaFeedbacksRepository'
import { SubmitFeedbackService } from 'services/SubmitFeedbackService'

export const routes = express.Router()

routes.post('/feedbacks', async (req, res) => {
  const { type, comment, screenshot } = req.body

  const prismaFeedbacksRepository = new PrismaFeedbacksRepository()
  const nodemailerAdapter = new NodemailerAdapter()

  const submitFeedbackService = new SubmitFeedbackService(
    prismaFeedbacksRepository, 
    nodemailerAdapter
  )

  await submitFeedbackService.execute({
    type,
    comment,
    screenshot
  })

  return res.status(201).send()
})