import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Time from './Time';
import Prfrm from './Prfrm';

function App() {
  return (
    <>
      <Header/>
      <Time />
      <Prfrm />
      <Footer/>
    </>
  );
}

export default App;
