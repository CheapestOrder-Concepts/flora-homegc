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
import LagosSetToDigitalize from './components/pages/BlogDetails.jsx/LagosSetToDemolish/LagosSetToDemolish';
import KnowYourLandSize from './components/pages/BlogDetails.jsx/KnowYourLandSize/KnowYourLandSize';
import KnowYourPropertyTitle from './components/pages/BlogDetails.jsx/KnowYourPropertyTitle/KnowYourTitle';
import Blogs from './components/pages/BlogDetails.jsx/Blogs';
import { scrollToTop } from 'react-scroll/modules/mixins/animate-scroll';
import QuickLinks from './components/pages/QuickLinks';
import RealEstateMistakes from './components/pages/BlogDetails.jsx/RealEstateMistakes/RealEstateMistakes';
function App() {

  return (
    <div className="App">
      <Router>
        <scrollToTop>
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
          <Route path='/blog-1' children={<LagosSetToDigitalize />} />
          <Route path='/blog-2' children={<KnowYourLandSize />} />
          <Route path='/blog-3' children={<KnowYourPropertyTitle />} />
          <Route path='/blog-3' children={<KnowYourPropertyTitle />} />
          <Route path='/blogs' children={<Blogs/>} />
          <Route path='/real-estate-mistakes' children={<RealEstateMistakes />} />
          <Route path='/quicklinks' children={<QuickLinks />} />
        </Switch>
        {/* <Footer /> */}
        </scrollToTop>
      </Router>
    </div>
  );
}

export default App;


//TODO: PUSH LATEST UPDATES