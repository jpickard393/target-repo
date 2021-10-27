import './App.css';
import React from 'react';
import Vehicle from './Vehicle';

// create context and put the result in a vaklriable called VehicleContext
export const VehicleContext = React.createContext();


function App() {
  return (
    <div className="App">
      {/* Use Vehicle context.provider to wrap components that will use it */}
      {/* Set initial value */}
      <VehicleContext.Provider value="Peugeot">
        <Vehicle />
      </VehicleContext.Provider>
    </div>
  );
}

export default App;
