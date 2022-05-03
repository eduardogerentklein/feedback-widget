import { useState } from 'react'
import { CloseButton } from '../closeButton'
import { feedbackTypes } from '../../utils'
import { FeedbackTypeStep, FeedbackContentStep } from './steps'

export type FeedbackType = keyof typeof feedbackTypes

export const WidgetForm = () => {
  const [feedbackType, setFeedbackType] = useState<FeedbackType|null>(null)

  const handleRestartFeedback = () => setFeedbackType(null)

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {!feedbackType ? (
        <FeedbackTypeStep 
          onFeedbackTypeChanged={setFeedbackType} />
      ) : (
        <FeedbackContentStep 
          feedbackType={feedbackType}
          onFeedbackRestartRequested={handleRestartFeedback} />
      )}

      <footer className="text-xs text-neutral-400">
        Feito com ♥ por <a className="underline underline-offset-2" href="https://eduardoklein.com">Eduardo</a>
      </footer>
    </div>
  )
}