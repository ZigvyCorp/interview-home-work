import React from 'react';
import {Provider} from 'react-redux';
import {Store} from 'redux';
import { persistStore, Persistor } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { ReduxConfig, configureStore } from './ReduxConfiguration';

type ReduxProviderProps = {
  reduxConfig: ReduxConfig
}

export class ReduxProvider extends React.PureComponent<ReduxProviderProps> {
  store: Store;
  persister: Persistor;
  constructor(props: ReduxProviderProps) {
    super(props);
    const {reduxConfig} = props;
    this.store = configureStore(reduxConfig);
    this.persister = persistStore(this.store);
  }

  render(): React.ReactNode {
    return (
      <Provider store={this.store}>
        <PersistGate persistor={this.persister}>
          {this.props.children}
        </PersistGate>
      </Provider>
    );
  }
}
