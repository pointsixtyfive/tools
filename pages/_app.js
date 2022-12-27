import { UserProvider } from '@auth0/nextjs-auth0/client';
import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
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
    <UserProvider>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </UserProvider>
  );
}

export default MyApp;
