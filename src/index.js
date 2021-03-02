
import   React            from 'react';
import   ReactDOM         from 'react-dom';

import { Provider }       from 'react-redux';
import   store            from './redux/store';

import { ApolloProvider } from '@apollo/client';
import   client           from './apollo';

import { CssBaseline }    from '@material-ui/core';
import { ThemeProvider }  from '@material-ui/core';
import   theme            from './app/theme.js';
import                         './index.css';

import   Main             from './pages/Main';

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline/>
          <Main/>
        </ThemeProvider>
      </Provider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
