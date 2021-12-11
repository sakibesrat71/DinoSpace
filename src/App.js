import './index.css';
import dine from './dine2.jpg';

import Navbar from'./navbar'
function App() {
  return (
    <div className="App">  
      <Navbar />
      <div className="moto">
        <img src={dine}/>
        <p>NEVER WAIT TO EAT AGAIN</p>
      </div>
    </div>
  );
}

export default App;
