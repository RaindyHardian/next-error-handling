import React from 'react';
import CustomErrorPage from './CustomErrorPage';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    // Define a state variable to track whether is an error or not
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI

    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // You can use your own error logging service here
    console.log({ error, errorInfo });
  }

  render() {
    const {
      props: { CustomFallbackUI },
    } = this;

    // Check if the error is thrown
    if (this.state.hasError) {
      // render any custom fallback UI
      if (CustomFallbackUI)
        return (
          <CustomFallbackUI
            error={this.state.error}
            clearError={() => this.setState({ hasError: false, error: null })}
          />
        );

      return (
        <CustomErrorPage
          error={this.state.error}
          clearError={() => this.setState({ hasError: false, error: null })}
        />
      );
    }

    // Return children components in case of no error
    return this.props.children;
  }
}

export default ErrorBoundary;
