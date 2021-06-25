import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './css/loader/bootstrap.css';

import './css/loader/style.css';
import './css/loader/larry.css';
import './css/loader/responsive.css';
import './css/loader/animate.css';
import './css/loader/elegant-icon.css';
import './css/loader/flat-icons.css';
import './css/loader/owl.css';
import './css/loader/jquery.fancybox.min.css';
import './css/loader/swiper.css';
import './css/loader/fontawesome-all.css';
import './css/App.css';
import './css/loader/datepicker.css';

import Nav from './components/layouts/Nav';
import Home from './components/pages/Home';
import Footer from './components/layouts/Footer';
import SearchModal from './components/layouts/SearchModal';
import LorR from './components/pages/LorR';
import Product from './components/pages/Product';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import Verification from './components/pages/Verification';
import PropertyAndBuyerServices from './components/pages/PropertyAndBuyerServices';
import DesignAndManage from './components/pages/DesignAndManage';

function App() {

  return (
    <div className="App">
      <Router>
        <SearchModal />
        <Nav />
        <Switch>
          <Route exact path='/' children={<Home />} />
          <Route path='/login-register' children={<LorR />} />
          <Route path='/product' children={<Product />} />
          <Route path='/contact' children={<Contact />} />
          <Route path='/about' children={<About />} />
          <Route path='/verification' children={<Verification />} />
          <Route path='/cpbs' children={<PropertyAndBuyerServices />} />
          <Route path='/dbm' children={<DesignAndManage />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
