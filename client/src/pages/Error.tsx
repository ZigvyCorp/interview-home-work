import { useRouteError } from 'react-router-dom'
import { Typography, Flex } from 'antd'

const { Title, Paragraph } = Typography

const Error: React.FC = () => {
  const error: any = useRouteError()

  return (
    <Flex style={{ height: '100vh' }} vertical align='center' justify='center'>
      <Title>Oops!</Title>
      <Paragraph>Sorry, an unexpected error has occurred.</Paragraph>
      <Paragraph type='secondary' italic>
        {error.statusText || error.message}
      </Paragraph>
    </Flex>
  )
}
export default Error
