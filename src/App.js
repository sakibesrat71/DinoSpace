import './index.css';
import dine from './dine2.jpg';
import Navbar from './navbar'
import Restaurant from './restaurants';

function App() {
  return (
    <div className="App">
      <Navbar />
        <img src={dine} />
        <p className='moto'>NEVER WAIT TO EAT AGAIN</p>   
      <Restaurant/>
    </div>
        
  );
}

export default App;
