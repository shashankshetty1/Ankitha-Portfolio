import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-black text-white p-6 text-center">
          <div>
            <h1 className="text-2xl font-bold mb-4">Something went wrong.</h1>
            <p className="text-white/60 mb-6">Please try refreshing the page.</p>
            <button 
              onClick={() => window.location.reload()}
              className="px-6 py-2 bg-primary rounded-full text-white font-bold"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.children;
  }
}
