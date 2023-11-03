import clsx from "clsx"
import { Link } from "react-router-dom"

interface ILogoProps {
  className?: string
}

const Logo: React.FC<ILogoProps> = (props) => {

  const { className } = props

  return (
    <div className={clsx('cursor-pointer',className)}>
      <Link to='/'>
        <img src="/images/zigvy-logo-white.svg" alt="Logo" className='h-auto max-w-full' /></Link>
    </div>
  )
}

export default Logo