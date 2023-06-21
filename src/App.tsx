import React from 'react';
import './App.sass';
import DecimalARomanos from './Components/DecimalARomanos';
import RomanosADecimal from './Components/RomanosADecimal';


function App() {
  return (
    <div className="App">
      <div className="bg">
        <div className="container">
          <h1 className="text-center">Conversor de números romanos</h1>
          <DecimalARomanos />
          <RomanosADecimal />
        </div>
      </div>
    </div>
  );
}

export default App;
