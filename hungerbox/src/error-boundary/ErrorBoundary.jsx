import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

//   componentDidCatch(error, errorInfo) {
//     // Log error to an error reporting service or console
//     // if (process.env.NODE_ENV !== 'production') {
//     //   console.error('ErrorBoundary caught an error:', error, errorInfo);
//     // }
//   }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '2rem', textAlign: 'center' }}>
          <h2>Something went wrong.</h2>
          <p style={{ color: 'red' }}>{this.state.error?.message || 'An unexpected error occurred.'}</p>
          <button onClick={this.handleReset} style={{ marginTop: '1rem', padding: '0.5rem 1rem' }}>
            Try Again
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;