import React from 'react';
import { ReduxProvider } from '../ReduxProvider/ReduxProvider';
import { ReduxConfig } from '../ReduxProvider/ReduxConfiguration';

type AppProviderProps = {
  reduxConfig: ReduxConfig,
};

export class AppProvider extends React.PureComponent<AppProviderProps> {
  render(): React.ReactNode {
    const {children, reduxConfig} = this.props;
      return (
        <ReduxProvider reduxConfig={reduxConfig}>
          {React.Children.only(children)}
        </ReduxProvider>
      );
  }
}
