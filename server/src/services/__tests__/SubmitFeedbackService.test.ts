import { SubmitFeedbackService } from '../SubmitFeedbackService'

const createFeedbackSpy = jest.fn()
const sendMailSpy = jest.fn()

const submitFeedback = new SubmitFeedbackService(
  { create: createFeedbackSpy },
  { sendMail: sendMailSpy }
)

describe('Submit feedback', () => {
  it('Should be able to submit a feedback', async () => {
    await expect(submitFeedback.execute({
      type: 'IDEA',
      comment: 'example comment',
      screenshot: 'data:image/png;base64,ASDAS927'
    })).resolves.not.toThrow()

    // Guarantees that the create function have been called.
    expect(createFeedbackSpy).toHaveBeenCalled()
    expect(sendMailSpy).toHaveBeenCalled()
  })

  it('Should not be able to submit a feedback without a type', async () => {
    await expect(submitFeedback.execute({
      type: '',
      comment: 'example comment',
      screenshot: 'data:image/png;base64,ASDAS927'
    })).rejects.toThrow()
  })

  it('Should not be able to submit a feedback without a comment', async () => {
    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: '',
      screenshot: 'data:image/png;base64,ASDAS927'
    })).rejects.toThrow()
  })

  it('Should not be able to submit a feedback with an invalid screenshot', async () => {
    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: 'Bugs everywhere',
      screenshot: 'test.png'
    })).rejects.toThrow()
  })
})