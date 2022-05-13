import { Card, Widget, FeedbackType, FeedbackCard } from 'components'
import { feedbackTypes, Feedbacks } from 'utils'

const feedbacks: Feedbacks[] = [
  {
    type: 'BUG',
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus mauris massa. Cras quis porta ligula. Etiam pharetra pharetra feugiat. In sollicitudin dapibus consequat. Sed ullamcorper aliquet viverra. Maecenas vel erat viverra, viverra dolor eu, vestibulum ex. Sed in enim arcu. Nunc facilisis elit id vestibulum volutpat.'
  },
  {
    type: 'IDEA',
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus mauris massa. Cras quis porta ligula. Etiam pharetra pharetra feugiat.',
  },
  {
    type: 'OTHER',
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus mauris massa. Cras quis porta ligula. Etiam pharetra pharetra feugiat. In sollicitudin dapibus consequat. Sed ullamcorper aliquet viverra. Maecenas vels erat viverra, viverra dolor eu, vestibulum ex. Sed in enim arcu. Nunc facilisis elit id vestibulum volutpat.',
  },
  {
    type: 'BUG',
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus mauris massa. Cras quis porta ligula. Etiam pharetra pharetra feugiat. In sollicitudin dapibus consequat. Sed ullamcorper aliquet viverra.',
  },
  {
    type: 'IDEA',
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus mauris massa. Cras quis porta ligula. Etiam pharetra pharetra feugiat. In sollicitudin dapibus consequat. Sed ullamcorper aliquet viverra. Maecenas vel erat viverra, viverra dolor eu, vestibulum ex. Sed in enim arcu. ',
  }
]

export const App = () => {
  return (
    <>
      <main className="px-4 py-12 md:px-40 gap-8 flex flex-col md:flex-row flex-wrap justify-start items-center w-full">
        <Card 
          type='full' 
          className='flex justify-center items-center px-4'>
          <span className="text-xl md:text-2xl text-zinc-400">
            Try submitting a bug feedback in the app 🐛 
          </span>  
        </Card>
        {
          feedbacks.map(feedback => {
            const feedbackTypeInfo = feedbackTypes[feedback.type as FeedbackType]
            return <FeedbackCard 
              key={feedback.comment}
              feedbackTypeInfo={feedbackTypeInfo} 
              feedback={feedback} />
          })
        }
        <Widget />
      </main>
    </>
  )
}