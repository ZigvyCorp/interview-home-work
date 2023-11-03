interface IContainerProps {
    children: JSX.Element | JSX.Element[]
}

const Container: React.FC<IContainerProps> = (props) => {
  return (
    <div className='px-8 py-4 m-auto max-w-primary flex-center xl:px-0'>{props.children}</div>
  )
}

export default Container