import logo from './logo.svg';
import './App.css';

import Header from './header.js';  //to import header component 
import TinderCards from './TinderCards.js'
import SwipeButton from './SwipeButton.js'
function App() {
  return (
    <div className="App">
     

      {/* header */}  {/* this is known as masking  */}
      
      <Header/>   {/* to use the header imported--REMEBER THE METHOD  */}

      <TinderCards/>

      {/* buttons */} 
       <SwipeButton/>
    </div>
  );
}

export default App;
