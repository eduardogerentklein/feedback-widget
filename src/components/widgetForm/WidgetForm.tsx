import { useState } from 'react'
import { feedbackTypes } from 'utils'
import { FeedbackTypeStep, FeedbackContentStep, FeedbackSuccessStep } from 'components'

export type FeedbackType = keyof typeof feedbackTypes

export const WidgetForm = () => {
  const [feedbackType, setFeedbackType] = useState<FeedbackType|null>(null)
  const [feedbackSent, setFeedbackSent] = useState<boolean>(false)

  const handleRestartFeedback = () => {
    setFeedbackSent(false)
    setFeedbackType(null)
  }

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {
        feedbackSent ? (
          <FeedbackSuccessStep onFeedbackRestartRequested={handleRestartFeedback} />
        ) : (
          <>
            {!feedbackType ? (
              <FeedbackTypeStep 
                onFeedbackTypeChanged={setFeedbackType} />
            ) : (
              <FeedbackContentStep 
                feedbackType={feedbackType}
                onFeedbackRestartRequested={handleRestartFeedback}
                onFeedbackSent={() => setFeedbackSent(true)} />
            )}
          </>
        )
      }
      <footer className="text-xs text-neutral-400">
        Made with ♥ by <a className="underline underline-offset-2" href="https://eduardoklein.com">Eduardo Klein</a>
      </footer>
    </div>
  )
}