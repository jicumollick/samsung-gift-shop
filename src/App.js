
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Shop from './Components/Shop/Shop';
import Questions from './Components/Questions/Questions';
function App() {
  return (
    <div className="App">
     <h1 className='mt-3'>SamSung Gift Shop</h1>
     <h3>Choose 4 Phones</h3>

     <Shop></Shop>

     <Questions></Questions>
    </div>
  );
}

export default App;
