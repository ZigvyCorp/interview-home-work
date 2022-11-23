
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './src/routing/StackNavigation';
import { Provider } from 'react-redux';
import { Store } from './src/screen/post/redux/store/store';

export default function App() {

  
  return (
    <Provider store={Store}>
      <NavigationContainer >
        <StackNavigation /> 
      </NavigationContainer>
    </Provider>
    
  );
}

