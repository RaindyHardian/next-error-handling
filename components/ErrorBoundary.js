import React from 'react';
import CustomErrorPage from './CustomErrorPage';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      error: null,
    };

    this.clearError = this.clearError.bind(this);
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {}

  clearError() {
    this.setState({
      hasError: false,
      error: null,
    });
  }

  render() {
    const {
      state: { hasError, error },
      props: { children },
      clearError,
    } = this;

    if (hasError) {
      // return React.createElement(
      //     errorPage,
      //     {
      //         header: 'Unhandled Application Error',
      //         message: error.message,
      //         onClear: clearError,
      //     },
      //     null
      // )
      return <CustomErrorPage message={error.message} />;
    }

    return children;
  }
}
