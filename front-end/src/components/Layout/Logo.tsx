import clsx from "clsx"

interface ILogoProps {
  className?: string
}

const Logo: React.FC<ILogoProps> = (props) => {

  const { className } = props

  return (
    <div className={clsx(className)}>
      <img src="/images/zigvy-logo.svg" alt="Logo" className='h-auto max-w-full' />
    </div>
  )
}

export default Logo