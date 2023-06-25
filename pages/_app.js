import ErrorBoundary from '@/components/ErrorBoundary';
import ErrorModalProvider from '@/context/ErrorModalContext';
import { ChakraProvider } from '@chakra-ui/react';

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <ErrorBoundary>
        <ErrorModalProvider>
          <Component {...pageProps} />
        </ErrorModalProvider>
      </ErrorBoundary>
    </ChakraProvider>
  );
}
