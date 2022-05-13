import { User } from 'phosphor-react'

import logoImageUrl from 'images/logo.svg'
import faviconUrl from 'images/favicon.png'

export const Header = () => {
  return (
    <nav className="px-4 md:px-40 sticky top-0 z-10 flex justify-between items-center w-full h-[4.5rem] bg-surface-secondary">
      <div className="flex items-center gap-3">
        <img 
          src={faviconUrl} 
          alt="Logo image"
          className='h-7 w-7' />
        <img 
          src={logoImageUrl} 
          alt="Logo image"
          className='h-10 w-40' />
      </div>
      <div className='flex items-center justify-center h-12 w-12 bg-brand-300 rounded-full'>
        <User className='h-6 w-6' />
      </div>
    </nav>
  )
}