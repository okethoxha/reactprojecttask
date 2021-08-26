import { BrowserRouter, Route } from 'react-router-dom';
import './App.scss';
import Home from 'pages/Home/Home';
import Layout from 'components/Layout';
import AddCustomer from 'pages/Home/AddCustomer/AddCustomer';
import Products from 'pages/Products/Products';
import About from 'pages/About/About';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Route exact path="/" component={Home} />
        <Route path="/add-customer" component={AddCustomer} />
        <Route path="/products" component={Products} />
        <Route path="/about" component={About} />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
