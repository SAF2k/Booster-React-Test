import './App.css';
import Accessories from './components/Accessories/Accessories';
import ESkate from './components/Eskate/ESkate';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Midpage from './components/midPage/Midpage';
import Options from './components/Options/Options';
import Rev from './components/Rev/Rev';


function App() {
  return (
    <div>
      <Header />
      <Home />
      <Midpage />
      <ESkate />
      <Rev />
      <Options />
      <Accessories />
      <Footer />
    </div>
  );
}

export default App;
