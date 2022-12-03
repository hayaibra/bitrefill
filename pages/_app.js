import { ColorSchemeProvider, MantineProvider } from '@mantine/core';
import { useState } from 'react';
import Layout from '../components/layout/Layout';

function MyApp({ Component, pageProps }) {
  const [colorScheme, setColorScheme] = useState('light');
  const toggleColorScheme = (value) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        styles={{
          Input: (theme) => ({
            filled: {
              transition: '10s border',
              '&:focus': {
                border: `4px solid ${theme.color.red[8]}`,
              },
            },
          }),
        }}
        theme={{
          colorScheme: 'dark',
          primaryColor: 'red',
        }}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default MyApp;
