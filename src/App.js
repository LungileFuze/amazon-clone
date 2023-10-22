
import './App.css';
import {Route} from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Products';

function App() {
  return (
    <div>
      <h1>Amazon Clone</h1>
      <Route path='/home'>
        <Home />
      </Route>
      <Route path='/products'>
        <Products />
      </Route>
      
    </div>
  );
}

export default App;
