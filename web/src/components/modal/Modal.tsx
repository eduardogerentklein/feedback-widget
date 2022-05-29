import { X } from 'phosphor-react'
import { Popover } from '@headlessui/react'

interface ModalProps {
  children?:
    | JSX.Element
    | JSX.Element[]
    | string
    | string[]
}

const isSafari = navigator.vendor && navigator.vendor.indexOf('Apple') > -1 &&
                navigator.userAgent &&
                navigator.userAgent.indexOf('CriOS') == -1 &&
                navigator.userAgent.indexOf('FxiOS') == -1

const modalClass = isSafari  
  ? 'modal-viewer my-[5rem] md:my-auto w-[100vw] md:w-full h-[100vh] md:h-full' 
  : 'modal-viewer h-[19.1rem] md:h-full w-[21.75rem] md:w-full'

export const Modal = ({ children }: ModalProps) => {
  return (
    <div className={modalClass}>
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