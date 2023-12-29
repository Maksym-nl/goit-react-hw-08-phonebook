import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { App } from 'components/App';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/redux';
import { PersistGate } from 'redux-persist/integration/react';
import { GlobalStyle } from './components/GlobalStyle';
import { BrowserRouter } from 'react-router-dom';
const theme = {
  colors: {
    black: '#212121',
    wite: 'fff',
    red: 'orandered',
  },
  radii: {
    sm: '4px',
    md: '8px',
    lg: '16px',
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={theme}>
          <BrowserRouter basename="/goit-react-hw-08-phonebook">
            <GlobalStyle />
            <App />
          </BrowserRouter>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
