import { useEffect, useState } from 'react';
import './App.css'
import Routing from './routes/Routing';
import ErrorBoundary from './error-boundary/ErrorBoundary';

function App() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  if (!isOnline) {
    return <div>No internet connection</div>;
  }

  return (
    <ErrorBoundary>
      <Routing />
    </ErrorBoundary>
    
  )
}

export default App


