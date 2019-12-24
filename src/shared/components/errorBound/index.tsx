import React from "react";

interface IProps {}

interface IState {
  hasError: boolean;
  error: any;
}

class ErrorBoundary extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false, error: {} };
  }

  static getDerivedStateFromError = (error: any) => {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error };
  };

  componentDidCatch = (error: any, errorInfo: any) => {
    // You can also log the error to an error reporting service
    console.log(error, errorInfo);
  };

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
