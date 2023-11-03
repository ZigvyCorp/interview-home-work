import { useDispatch } from 'react-redux';
import { useAppSelector } from './hooks/useAppSelector';
import { Button } from 'antd';
import { BrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import './utils/ArrayUtils';
import './utils/StringUtil'

const App = () => {
  const dispatch = useDispatch();

  const fetchData = () => {
    dispatch({ type: 'LOGIN_REQUESTING' })
  }

  console.log(process.env.REACT_APP_API_ENDPOINT);

  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  )
}

export default App