import { prisma } from "../../prisma"
import { FeedbackCreateData, FeedbacksRepository } from "repositories/FeedbacksRepository"

export class PrismaFeedbacksRepository implements FeedbacksRepository {
  
  create = async ({ type, comment, screenshot}: FeedbackCreateData) => {
    await prisma.feedback.create({
      data: { 
        type, 
        comment, 
        screenshot 
      }
    })
  }

}