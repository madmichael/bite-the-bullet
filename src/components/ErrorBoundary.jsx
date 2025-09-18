import React from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
    
    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error caught by boundary:', error, errorInfo);
    }
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-brand-background text-brand-text font-sans p-4 flex items-center justify-center">
          <div className="max-w-md mx-auto text-center">
            <div className="bg-brand-surface/50 backdrop-blur rounded-lg border-2 border-red-500 p-6">
              <AlertTriangle className="mx-auto text-red-500 mb-4" size={64} />
              <h2 className="text-xl font-bold text-red-400 mb-4">Something went wrong</h2>
              <p className="text-brand-text-muted mb-6">
                The character generator encountered an unexpected error. 
                Please try refreshing the page or generating a new character.
              </p>
              
              <button
                onClick={this.handleReset}
                className="bg-brand-secondary hover:bg-brand-primary focus:bg-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-accent text-white px-6 py-3 rounded-lg font-bold shadow-lg transition-all flex items-center justify-center gap-2 min-h-[48px] w-full"
                aria-label="Try again"
              >
                <RefreshCw size={20} aria-hidden="true" />
                Try Again
              </button>
              
              {process.env.NODE_ENV === 'development' && this.state.error && (
                <details className="mt-4 text-left">
                  <summary className="cursor-pointer text-sm text-brand-text-muted hover:text-brand-text">
                    Error Details (Development)
                  </summary>
                  <pre className="mt-2 text-xs bg-gray-800 p-2 rounded overflow-auto max-h-32">
                    {this.state.error.toString()}
                    {this.state.errorInfo.componentStack}
                  </pre>
                </details>
              )}
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
