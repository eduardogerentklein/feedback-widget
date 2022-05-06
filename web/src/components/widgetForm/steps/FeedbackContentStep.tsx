import { FormEvent, useState } from "react"
import { ArrowLeft } from "phosphor-react"

import { FeedbackType, ScreenshotButton, CloseButton, Loading } from "components"
import { feedbackTypes } from 'utils'
import { api } from "src/lib/api"

interface FeedbackContentStepProps {
  feedbackType: FeedbackType
  onFeedbackRestartRequested: () => void
  onFeedbackSent: () => void
}

export const FeedbackContentStep = ({ 
  feedbackType, 
  onFeedbackRestartRequested,
  onFeedbackSent
}: FeedbackContentStepProps) => {
  const [screenshot, setScreenshot] = useState<string|null>(null)
  const [feedbackComment, setFeedbackComment] = useState<string>('')
  const [isSendingFeedback, setIsSendingFeedback] = useState<boolean>(false)

  const feedbackTypeInfo = feedbackTypes[feedbackType]
  
  const handleSubmitFeedback = async (event: FormEvent) => {
    event.preventDefault()

    setIsSendingFeedback(true)

    await api.post('/feedbacks', {
      type: feedbackType,
      comment: feedbackComment,
      screenshot
    })

    setIsSendingFeedback(false)
    onFeedbackSent()
  }

  return (
    <>
      <header>
      <button 
        type="button" 
        className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
        onClick={onFeedbackRestartRequested}>
        <ArrowLeft 
          weight='bold' 
          className='w-4 h-4' />
      </button>

        <span className="text-xl leading-6 flex items-center gap-2">
          <img src={feedbackTypeInfo.image.source} alt={feedbackTypeInfo.image.alt} className="w-6 h-6" />
          {feedbackTypeInfo.title}
        </span>

        <CloseButton />
      </header>

      <form className="my-4 w-full" onSubmit={handleSubmitFeedback}>
        <textarea 
          className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
          placeholder="Please, tell us with details what is happening..."
          onChange={event => setFeedbackComment(event.target.value)} />

          <footer className="flex gap-2 mt-2">
            <ScreenshotButton 
              onScreenshotTook={setScreenshot}
              screenshot={screenshot} />

            <button 
              type="submit"
              disabled={feedbackComment.length === 0 || isSendingFeedback}
              className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500">
                { isSendingFeedback ? <Loading /> : 'Send feedback'}
            </button>
          </footer>
      </form>
    </>
  )
}