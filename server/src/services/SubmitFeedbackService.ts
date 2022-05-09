import { MailAdapter } from 'adapters/MailAdapter'
import { FeedbacksRepository } from 'repositories/FeedbacksRepository'

interface SubmitFeedbackServiceRequest {
  type: string
  comment: string
  screenshot?: string
}

export class SubmitFeedbackService {
  constructor(
    private feedbacksRepository: FeedbacksRepository,
    private mailAdapter: MailAdapter
    ) { }

  async execute(request: SubmitFeedbackServiceRequest) {
    const { type, comment, screenshot } = request

    if (!type)
      throw new Error(`Type is required.`)
      
    if (!comment)
      throw new Error(`Comment is required.`)

    if (screenshot && !screenshot.startsWith('data:image/png;base64'))
      throw new Error(`Invalid screenshot format.`)
    
    await this.feedbacksRepository.create({
      comment,
      type,
      screenshot
    })

    await this.mailAdapter.sendMail({
      subject: 'New feedback',
      body: [
        `<div style="font-family: sans-serif; font-size: 1rem; color: #111;">`,
        `<p>Feedback type: ${type}</p>`,
        `<p>Comment: ${comment}</p>`,
        screenshot ? `<img src="${screenshot}" alt="Feedback screenshot" />` : null,
        `</div>`,
      ].join('\n')
    })
  }
}