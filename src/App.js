
import { useEffect } from 'react';
import './App.css';
import { getGrandParentElement, getGrandParentPreviousSibling, getParentElement, getSizeInputElements } from './utils';

function App() {
  useEffect(() => {
    // #1 
    getParentElement()
    getGrandParentElement()
    getGrandParentPreviousSibling()
    getSizeInputElements()
    
  }, [])
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
