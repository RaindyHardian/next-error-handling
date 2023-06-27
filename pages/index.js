import ErrorBoundary from '@/components/ErrorBoundary';
import HomeComponent from '@/components/Home/HomeComponent';

export default function HomePage() {
  return (
    <ErrorBoundary>
      <HomeComponent />
    </ErrorBoundary>
  );
}
