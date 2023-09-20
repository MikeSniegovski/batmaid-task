import React from 'react';

import './App.css';
import { store} from './store/store'
import {Provider} from 'react-redux'
import CleaningsList from "./components/cleaningsList";

function App() {
  return (
      <Provider store={store}>
    <div className="App">
        <h1>All my cleanings</h1>
<CleaningsList/>
    </div>
      </Provider>
  );
}

export default App;
