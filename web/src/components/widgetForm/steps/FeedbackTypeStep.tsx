import { FeedbackType, CloseButton } from 'components'
import { feedbackTypes } from 'utils'

interface FeedbackTypeStepProps {
  onFeedbackTypeChanged: (type: FeedbackType) => void;
}

export const FeedbackTypeStep = ({ onFeedbackTypeChanged }: FeedbackTypeStepProps) => {
  return (
    <>
      <header>
        <span className="text-xl leading-6">Leave your feedback!</span>

        <CloseButton />
      </header>

      <div className="flex py-8 gap-2 w-full">
        {
          Object.entries(feedbackTypes).map(([key, value]) => {
            return (
              <button
                key={key}
                onClick={() => onFeedbackTypeChanged(key as FeedbackType)}
                className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none">
                <img
                  loading='lazy' 
                  src={value.image.source} 
                  alt={value.image.alt} />
                <span>{value.title}</span>
              </button>
            )
          })
        }
      </div>
    </>
  )
}