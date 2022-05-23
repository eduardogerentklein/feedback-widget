import { useState } from 'react'

import { Card, Widget, FeedbackType, FeedbackCard, Filter } from 'components'
import { feedbackTypes, Feedbacks } from 'utils'

const initialFeedbacks: Feedbacks[] = [
  {
    type: 'BUG',
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus mauris massa. Cras quis porta ligula. Etiam pharetra pharetra feugiat. In sollicitudin dapibus consequat. Sed ullamcorper aliquet viverra. Maecenas vel erat viverra, viverra dolor eu, vestibulum ex. Sed in enim arcu. Nunc facilisis elit id vestibulum volutpat.',
    screenshot: 'test'
  },
  {
    type: 'IDEA',
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus mauris massa. Cras quis porta ligula. Etiam pharetra pharetra feugiat.',
  },
  {
    type: 'OTHER',
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus mauris massa. Cras quis porta ligula. Etiam pharetra pharetra feugiat. In sollicitudin dapibus consequat. Sed ullamcorper aliquet viverra. Maecenas vels erat viverra, viverra dolor eu, vestibulum ex. Sed in enim arcu. Nunc facilisis elit id vestibulum volutpat.',
    screenshot: 'test'
  },
  {
    type: 'BUG',
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus mauris massa. Cras quis porta ligula. Etiam pharetra pharetra feugiat. In sollicitudin dapibus consequat. Sed ullamcorper aliquet viverra.',
  },
  {
    type: 'IDEA',
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus mauris massa. Cras quis porta ligula. Etiam pharetra pharetra feugiat. In sollicitudin dapibus consequat. Sed ullamcorper aliquet viverra. Maecenas vel erat viverra, viverra dolor eu, vestibulum ex. Sed in enim arcu. ',
    screenshot: 'test'
  }
]

export const App = () => {
  const [ feedbacks, setFeedbacks ] = useState<Feedbacks[]>(initialFeedbacks)

  const handleFilterFeedbacks = (type: string) => {
    if (type === 'CLEAR')
      setFeedbacks(initialFeedbacks)
    else {
      const filteredFeedbacks = initialFeedbacks.filter(x => x.type === type)
      setFeedbacks(filteredFeedbacks)
    }
  }

  return (
    <>
      <main className="px-4 py-12 md:px-40 flex flex-col md:flex-row w-full">
        <aside className="px-4 pb-4 md:px-0 md:pr-4">
          <section className="flex">
            <div className="flex p-1 gap-3 md:gap-2 md:flex-col justify-start items-center rounded-full bg-[#27272a4d]">
              <Filter onFilterChanged={handleFilterFeedbacks} />
            </div>
          </section>
        </aside>
        <article>
          <section className="gap-8 flex flex-col md:flex-row flex-wrap justify-start items-center w-full">
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
          </section>
        </article>
        <Widget />
      </main>
    </>
  )
}