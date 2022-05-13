import { Camera } from 'phosphor-react'

import { Card } from 'components'
import { Feedbacks } from 'utils'

interface FeedbackCardProps {
  feedback: Feedbacks
  feedbackTypeInfo: FeedbackTypeInfo
}

interface FeedbackTypeInfo {
  image?: FeedbackTypeInfoImage
  title: string
}

interface FeedbackTypeInfoImage {
  source: string
  alt: string
}

export const FeedbackCard = ({ 
  feedback,
  feedbackTypeInfo 
}: FeedbackCardProps) => {
  return (
    <Card  
      type='flat' 
      className='flex grow gap-1 items-start p-5'>
      <span className="text-xl leading-6 flex gap-2">
        <img 
          src={feedbackTypeInfo.image?.source} 
          alt={feedbackTypeInfo.image?.alt} 
          className="w-6 h-6" />
        {feedbackTypeInfo.title}
      </span>
      <hr />
      <span className="line-clamp-7 h-48 md:h-0 max-h-48">
        {feedback.comment}
      </span>
      <button 
        type="button" 
        className="relative md:absolute md:bottom-4 flex items-center justify-center rounded-lg px-3 w-full md:w-[calc(100%-2.5rem)] h-10 bg-brand-500 hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 text-white transition-colors gap-2">
        <Camera className="h-6 w-6" /> 
        <span>View screenshot</span>
      </button>
    </Card>
  )
}