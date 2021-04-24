import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Products from './pages/Products';
import Header from './components/Header';
import Footer from './components/Footer'
import AddProduct from './pages/AddProduct'
import './App.css';

function App() {
  return (
    <div>
      <Router>
      <Header />
        <Switch>
          <Route path='/' exact component={Products} />
          <Route path='/addProduct' exact component={AddProduct} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
