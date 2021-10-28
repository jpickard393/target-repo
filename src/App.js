import './App.css';
import React from 'react';
import VehicleForm from './VehicleForm';
import Vehicle from "./Data/Vehicle";

// create context and put the result in a variable called VehicleContext
export const VehicleContext = React.createContext();

function App() {
  return (
    <div className="App">
      {/* Use Vehicle context.provider to wrap components that will use it */}
      {/* Set initial value */}
      <VehicleContext.Provider value={Vehicle}>
        <VehicleForm />
      </VehicleContext.Provider>
    </div>
  );
}

export default App;
