const cardTypes = {
  flat: {
    className: 'card card-flat hover:border-brand-500 focus:border-brand-500 focus:outline-none'
  },
  full: {
    className: 'card card-full'
  }
}

export type CardTypes = keyof typeof cardTypes

interface CardProps {
  type: CardTypes
  className?: string
  children?:
    | JSX.Element
    | JSX.Element[]
    | string
    | string[]
}

export const Card = ({ 
  type,
  children,
  className
}: CardProps) => {
  const cardType = cardTypes[type]

  const css = className ? 
    `${cardType.className} ${className}` :
    cardType.className

  return (
    <div className={css}>
      {!! children && children}
    </div>
  )
}