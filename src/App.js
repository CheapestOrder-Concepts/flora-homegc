import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './css/App.css';



import Nav from './components/layouts/Nav';
import Home from './components/pages/Home';
// import Footer from './components/layouts/Footer';
import SearchModal from './components/layouts/SearchModal';
import LorR from './components/pages/LorR';
import Product from './components/pages/Product';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import Verification from './components/pages/verification/Verification';
import CompleteBuyer from './components/pages/CompleteBuyer';
import Floracity from './components/pages/FloraCity/Floracity';
import TheHive from './components/pages/FloraCity/TheHive';
import FloraEcopolis from './components/pages/FloraCity/FloraEcopolis';
import OurEstates from './components/pages/OurEstates';
import OptinForm from './components/pages/FloraCity/OptinForm';
import LagosSetToDemolish from './components/pages/BlogDetails.jsx/LagosSetToDemolish/LagosSetToDemolish';
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
          <Route path='/cpbs' children={<CompleteBuyer />} />
          <Route path='/floracity' children={<Floracity />} />
          <Route path='/fern-island' children={<Floracity />} />
          <Route path='/the-hive' children={<TheHive />} />
          <Route path='/floracity-ecopolis' children={<FloraEcopolis />} />
          <Route path='/our-estate' children={<OurEstates />} />
          <Route path='/optin' children={<OptinForm />} />
          <Route path='/blog:1' children={<LagosSetToDemolish />} />
        </Switch>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;


//TODO: PUSH LATEST UPDATES