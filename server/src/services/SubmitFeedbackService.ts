import { MailAdapter } from "../adapters/MailAdapter";
import { FeedbacksRepository } from "../repositories/FeedbacksRepository";

interface SubmitFeedbackServiceRequest {
  type: string;
  comment: string;
  screenshot?: string;
}

export class SubmitFeedbackService {
  constructor(
    private feedbacksRepository: FeedbacksRepository,
    private mailAdapter: MailAdapter
    ) { }

  async execute(request: SubmitFeedbackServiceRequest) {
    const { type, comment, screenshot } = request

    await this.feedbacksRepository.create({
      comment,
      type,
      screenshot
    })

    await this.mailAdapter.sendmail({
      subject: 'New feedback',
      body: [
        `<div style="font-family: sans-serif; font-size: 1rem; color: #111;">`,
        `<h4>Feedback type: ${type}</h4>`,
        `<p>Comment: ${comment}</p>`,
        `</div>`,
      ].join('\n')
    })
  }
}