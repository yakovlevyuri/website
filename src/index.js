import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { ThemeProvider } from 'react-jss';
import App from './App';

/*import ssdasd from './components/common/assets/fonts/'*/

import { apolloClient } from './api';
import registerServiceWorker from './registerServiceWorker';

const theme = {
  colorPrimary: 'green',

  '@font-face': [
    {
      fontFamily: 'latolight',
      src: `url('../fonts/lato/lato-light-webfont.woff2') format('woff2'), 
          url('../fonts/lato/lato-light-webfont.woff') format('woff')`,
      fontWeight: 'normal',
      fontStyle: 'normal',
    },
    {
      fontFamily: 'latoregular',
      src: `url('../fonts/lato/lato-regular-webfont.woff2') format('woff2'), 
          url('../fonts/lato/lato-regular-webfont.woff') format('woff')`,
      fontWeight: 'normal',
      fontStyle: 'normal',
    },

    {
      fontFamily: 'latobold',
      src: `url('./components/common/assets/fonts/lato/lato-bold-webfont.woff2') format('woff2'), 
          url('../fonts/lato/lato-bold-webfont.woff') format('woff')`,
      fontWeight: 'normal',
      fontStyle: 'normal',
    },
  ],
};

ReactDOM.render(
  <ApolloProvider client={apolloClient}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </ApolloProvider>,
  document.getElementById('root'),
);
registerServiceWorker();
