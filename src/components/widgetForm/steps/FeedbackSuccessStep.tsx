import { CloseButton } from "../../closeButton"
import successImageUrl from '../../../images/success.svg'

interface FeedbackSuccessStepProps {
  onFeedbackRestartRequested: () => void
}

export const FeedbackSuccessStep = ({ 
  onFeedbackRestartRequested 
}: FeedbackSuccessStepProps) => {
  return (
    <>
      <header>
        <CloseButton />
      </header>

      <div className="flex flex-col items-center py-10 w-[304px]">
        <img src={successImageUrl} alt='Feedback sent!' />

        <span className="text-xl mt-2">Thank you for your feedback!</span>

        <button
          type="button"
          onClick={onFeedbackRestartRequested}
          className="py-2 px-6 mt-6 bg-zinc-800 rounded-md border-transparent text-sm leading-6 hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors">
            Send another feedback
        </button>
      </div>
    </>
  )
}