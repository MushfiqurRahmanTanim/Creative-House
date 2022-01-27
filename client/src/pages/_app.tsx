import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux';
import { QueryClient } from 'react-query';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import Layout from '@components/Layout';
import { PersistGate } from 'redux-persist/integration/react';
import { store,persistor } from '@app/store';
export const client = new QueryClient();
function MyApp({ Component, pageProps }: AppProps) {
  
  return (
    <QueryClientProvider {...{ client }}>
      <Provider {...{ store }}>
        <PersistGate loading={null} {...{ persistor }}>
          <Layout>
            <Component {...pageProps} />
            {process.env.NODE_ENV !== 'production' && <ReactQueryDevtools />}
          </Layout>
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  );
  
}

export default MyApp
