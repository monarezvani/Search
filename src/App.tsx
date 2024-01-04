import React from 'react';
import './App.scss';
import { Search } from './pages/Search';
import { Provider } from 'react-redux';
import { store } from './features/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Search />
      </div>
    </Provider>
  );
}

export default App;
