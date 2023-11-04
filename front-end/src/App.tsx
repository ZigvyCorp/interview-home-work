import { useDispatch } from 'react-redux';
import { useAppSelector } from './hooks/useAppSelector';
import { Button } from 'antd';
import { BrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import './utils/ArrayUtils';
import './utils/StringUtil'

const App = () => {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  )
}

export default App