import { FeedbackType } from 'components'
import { X } from 'phosphor-react'
import { feedbackTypes } from 'utils'

interface FilterProps {
  onFilterChanged: (type: string) => void
}

const filterTypes: FeedbackType[] = ['BUG', 'IDEA', 'OTHER']

export const Filter = ({
  onFilterChanged
} : FilterProps) => {

  const handleClick = (type: string) => {
    onFilterChanged(type)
  }

  return (
    <>
    {
      filterTypes.map(type => (
        <button
          key={type}
          onClick={() => handleClick(type)} 
          type="button" 
          className='flex justify-center items-center rounded-full w-8 h-8 hover:bg-surface-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-zinc-700 transition-colors'>
          <img 
            loading='lazy'
            src={feedbackTypes[type].image?.source} 
            alt={feedbackTypes[type].image?.alt} 
            className="w-6 h-6" />
        </button>
      ))
    }
    <button
      onClick={() => handleClick('CLEAR')} 
      type="button" 
      className='flex justify-center items-center rounded-full w-8 h-8 hover:bg-surface-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-zinc-700 transition-colors'>
        <X 
          weight='bold' 
          className='w-4 h-4' 
          alt='Clear filter' />
    </button>
    </>
  )
}