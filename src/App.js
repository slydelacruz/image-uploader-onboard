
import { useEffect } from 'react';
import './App.css';
import { getGrandParentElement, getGrandParentPreviousSibling, getParentElement, getSizeInputElements, sizeInputListeners } from './utils';

function App() {
  useEffect(() => {
    // #1 
    getParentElement()
    getGrandParentElement()
    getGrandParentPreviousSibling()
    getSizeInputElements()
    sizeInputListeners()
  }, [])
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
