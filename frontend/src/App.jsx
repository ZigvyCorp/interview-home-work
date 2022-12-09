import {
  Switch,
} from 'react-router-dom';
import './App.css';
import Main from './components/Interview/Main/Main';
import InterViewHomeTemplate from './templates/InterviewTemplate/InterViewHomeTemplate';
import Detail from './components/Interview/Detail';
import HandleError from './components/Interview/HandleError';
import LoadingComponent from './components/GlobalSetting/LoadingComponent/LoadingComponent';

function App() {
  return (
    <>
      <LoadingComponent/>
      <Switch>
        <InterViewHomeTemplate exact path='/' Component={Main} />
        <InterViewHomeTemplate exact path='/detail/:id' Component={Detail} />
        <InterViewHomeTemplate exact path='/home' Component={Main} />
        <InterViewHomeTemplate exact path='*' Component={HandleError} />
      </Switch>
    </>
  );
}

export default App;
