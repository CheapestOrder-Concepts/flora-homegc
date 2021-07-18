import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './css/App.css';



import Nav from './components/layouts/Nav';
import Home from './components/pages/Home';
import Footer from './components/layouts/Footer';
import SearchModal from './components/layouts/SearchModal';
import LorR from './components/pages/LorR';
import Product from './components/pages/Product';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import Verification from './components/pages/verification/Verification';
import CompleteBuyer from './components/pages/CompleteBuyer';
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
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

//TODO: IMPLEMENT REMAINING PAGES AND COMPARE THERE STYLES
//TODO: CHECK THE CSS THOROUGHLY TO CHECK FOR CONFLICTS ON BOTH CSS
//TODO: DOWNLOAD LAYINTON_DEV BRANCH ZIP FOLDER FROM GITHUB