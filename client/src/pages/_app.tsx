import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux';
import { QueryClient } from 'react-query';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import Layout from '@components/Layout';
export const client = new QueryClient();
function MyApp({ Component, pageProps }: AppProps) {
  
  return (
    <QueryClientProvider {...{ client }}>
      {/* <Provider {...{ store }}> */}
          <Layout>
            <Component {...pageProps} />
            {process.env.NODE_ENV !== 'production' && <ReactQueryDevtools />}
          </Layout>
       
      {/* </Provider> */}
    </QueryClientProvider>
  );
  
}

export default MyApp
