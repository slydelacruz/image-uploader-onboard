import "./App.css";
import { useEffect } from "react";
import { rowOneText, rowTwoText, displayTagNames, displayConsolelog, makeRowsLightGray } from "./utils";
// import forEach from 'lodash/forEach';

function App() {
  useEffect(() => {
    rowOneText()
    rowTwoText()
    displayTagNames()
    displayConsolelog()
    makeRowsLightGray()
  }, [])
  
  return (
    <div className="App">
     
    </div>
  );
}

export default App;
