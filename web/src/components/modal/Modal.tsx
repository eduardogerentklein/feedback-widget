import { X } from 'phosphor-react'
import { Popover } from '@headlessui/react'

interface ModalProps {
  children?:
    | JSX.Element
    | JSX.Element[]
    | string
    | string[]
}

export const Modal = ({ children }: ModalProps) => {
  return (
    <div className='modal-viewer'>
      <Popover.Button 
        title='Close modal' 
        className='top-5 right-5 absolute text-zinc-400 hover:text-zinc-100'>
        <X 
          weight='bold' 
          className='w-4 h-4' />
      </Popover.Button>
        {!! children && children}
    </div>
  )
}