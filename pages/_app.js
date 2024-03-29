import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import { UserProvider } from '../components/context/UserContext';
import Layout from '../components/Layout';
import '../styles/globals.css';

//example
const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
};

const theme = extendTheme({ colors });

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <UserProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </UserProvider>
    </ChakraProvider>
  );
}

export default MyApp;
