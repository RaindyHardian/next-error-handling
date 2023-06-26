import React from 'react';
import CustomErrorPage from './CustomErrorPage';
import ErrorModal from './ErrorModal';

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
    // Check if the error is thrown
    if (this.state.hasError) {
      // render any custom fallback UI
      return (
        <CustomErrorPage
          error={this.state.error}
          clearError={() => this.setState({ hasError: false, error: null })}
        />
      );
    }

    // Return children components in case of no error
    return (
      <>
        {this.props.children}
        {/* <ErrorModal
          onClose={() => this.setState({ hasError: false, error: null })}
          isOpen={this.state.hasError}
          errors={[this.state.error]}
        /> */}
      </>
    );
  }
}

export default ErrorBoundary;
