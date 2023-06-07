import Nav from './components/layout/Nav.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Cryptocurrencies from './components/pages/Cryptocurrencies.jsx';
import Exchanges from './components/pages/Exchanges.jsx';
import { CryptoCoinProvider } from './context/crypto/CryptoCoinContext.js';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FavCoin from './components/pages/FavCoin.jsx';
import BitcoinDetail from './components/pages/BitcoinDetail.jsx'; 
import 'react-circular-progressbar/dist/styles.css';
function App() {
  return (
    <>
      <CryptoCoinProvider>
        <Router>
          <Nav />
          <main>
            <Routes>
              <Route path='/' element={<Cryptocurrencies />} />
              <Route path ='/bitCoinDetail' element={<BitcoinDetail/>}/>
              <Route path='/exchanges' element={<Exchanges />} />
              <Route path='/favourite' element={<FavCoin />} />
            </Routes>
          </main> 
        </Router>
        <ToastContainer />
      </CryptoCoinProvider>
    </>
  );
}

export default App;
