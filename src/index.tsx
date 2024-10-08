import React from 'react';
import { Provider } from 'react-redux';
import { store } from './stores';

const App = () => {
  return (
    <Provider store={store}>
      <div>Hello</div>
    </Provider>
  );
};

export default App;
