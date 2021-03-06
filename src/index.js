import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Auth0
import Auth0ProviderWithHistory from './auth0-provider-with-history';

ReactDOM.render(
  <Auth0ProviderWithHistory>
    <App />
  </Auth0ProviderWithHistory>,
  document.getElementById('root')
);
