// Layout.js
import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import { AuthContextProvider } from './provider/AuthContext';

import  AppNavigator  from './navigation/AppNavigator';
import { DataService } from './provider/DataService';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <AuthContextProvider>
            <DataService>
               <AppNavigator/>
            </DataService>
          </AuthContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
