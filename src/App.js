import './App.css';
import { ShoppingList } from './ShoppingList';
import shopping from './shopping.jpg';
import shoppingBasket from './shoppingBasket.jpg'

function App() {
  return (
    <div className= 'App'>

    <div className='container'>
      <img src={shopping} className='firstImg' width='60%'alt='shopping'/>
    </div>

    <div className='container'>
      <h1>Let's go shopping!!!</h1>
    </div>
      <ShoppingList />

    <div className='container'>
      <img src={shoppingBasket} className='roundedImg' width='60%'alt='shopping'/>
    </div>

    </div>

  );
}

export default App;
