/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import RootNavigation from './src/routers';
import {Provider} from 'react-redux';
import {store, persistor} from './src/service/store';
import {PersistGate} from 'redux-persist/integration/react';
import {init} from './src/bootstrap';

const App: () => Node = () => {
  const _onBeforeLift = () => {
    init();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Provider store={store}>
        <PersistGate
          onBeforeLift={_onBeforeLift}
          loading={null}
          persistor={persistor}>
          <RootNavigation />
        </PersistGate>
      </Provider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
