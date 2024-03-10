
import './App.css';
import '../src/Components/Navbar.css';
import Navbar from './Components/Navbar';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import Headroom from "react-headroom";

function App() {

  const claimHandleClick = () => {
    Swal.fire({
      icon: "error",
      title: "Content Not Yet Available",
      text: "Sorry for the inconvenience.",
      customClass: {
        popup: 'custom-swal-popup',
        confirmButton: 'custom-swal-confirm-button'
      }
    });
  }

  let handleClick = () => {
    Swal.fire({
      icon: "info",
      title: "Coming Soon...",
      text: "Stay tuned!",
      customClass: {
        popup: 'custom-swal-popup',
        confirmButton: 'custom-swal-confirm-button',
        icon: 'custom-swal-icon'
      }
    });
  }

  return (

    <div className="App">
      <header className="App-header">
        <Navbar />
        <img src={"main-banner.jpg"} className="App-logo" alt="logo" />
        <div className='container text-center'>
          <button onClick={claimHandleClick} className='btn btn-danger claim-now mb-1'><small>CLAIM NOW</small></button>
        </div>
      </header >
      <div className='container mt-3'>
        <div className='jackpot-container'>
          <img src={"jackpot.png"} className="App-logo jackpot" alt="logo" />
        </div>
        <div className='title-container'>
          <img src={"title-jackpot.png"} className="App-logo title-jackpot" alt="logo" />
        </div>
        <div className='odometer-container'>
          <img src={"odometer.png"} className="App-logo jackpot title-odometer" alt="logo" />
        </div>
      </div>

      <div className='container card-container game-list'>
        <h2 className='mt-4'>Game List</h2>

        <div className='row'>
          <div className='col-lg-6 mt-3'>
            <div className="card card-1 border-0 rounded-0">
              <div className="card-body">
                <br />
                <h3 className="card-title text-light fw-bold">SLOT <br /> CASINO</h3>
                <Link to="/" onClick={handleClick} className="btn btn-danger col-auto"><small>PLAY</small></Link>
              </div>
            </div>
          </div>

          <div className='col-lg-3 mt-3'>
            <div className="card card-2 border-0 rounded-0">
              <div className="card-body">
                <br />
                <h3 className="card-title text-light fw-bold">LIVE <br /> CASINO</h3>
                <Link to="/" onClick={handleClick} className="btn btn-danger col-auto"><small>PLAY</small></Link>
              </div>
            </div>
          </div>

          <div className='col-lg-3 mt-3'>
            <div className="card card-3 border-0 rounded-0">
              <div className="card-body">
                <br />
                <h3 className="card-title text-light fw-bold">SPORTS <br /> BETTING</h3>
                <Link to="/" onClick={handleClick} className="btn btn-danger col-auto"><small>PLAY</small></Link>
              </div>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='col-lg-3 mt-3'>
            <div className="card card-4 border-0 rounded-0">
              <div className="card-body">
                <br />
                <h3 className="card-title text-light fw-bold">MINI <br /> GAME</h3>
                <Link to="/" onClick={handleClick} className="btn btn-danger col-auto"><small>PLAY</small></Link>
              </div>
            </div>
          </div>

          <div className='col-lg-3 mt-3'>
            <div className="card card-5 border-0 rounded-0">
              <div className="card-body">
                <br />
                <br />
                <h3 className="card-title text-light fw-bold">LOTTERY</h3>
                <p></p>
                <Link to="/" onClick={handleClick} className="btn btn-danger col-auto"><small>PLAY</small></Link>
              </div>
            </div>
          </div>

          <div className='col-lg-3 mt-3'>
            <div className="card card-6 border-0 rounded-0">
              <div className="card-body">
                <br />
                <h3 className="card-title text-light fw-bold">EVENTS & <br /> PROMO</h3>
                <Link to="/" onClick={handleClick} className="btn btn-danger col-auto"><small>VIEW</small></Link>
              </div>
            </div>
          </div>

          <div className='col-lg-3 mt-3'>
            <div className="card card-7 border-0 rounded-0">
              <div className="card-body">
                <br />
                <br />
                <h3 className="card-title text-light fw-bold">COUPON</h3>
                <p></p>
                <Link to="/" onClick={handleClick} className="btn btn-danger col-auto"><small>VIEW</small></Link>
              </div>
            </div>
          </div>

        </div>


      </div>

      <div className='container exclusive-promotion'>
        <div className="d-flex justify-content-between align-items-center mt-4">
          <h2>Exclusive Promotion</h2>
          <h6 className='text-light'><Link to="/" onClick={handleClick} className='view-more text-white'> <small>View More</small></Link></h6>
        </div>
        <div className='row'>
          <div className='col-md-3 mt-3'>
            <img src={"promo-1.jpg"} className="App-logo" alt="promo-1" />
          </div>
          <div className='col-md-3 mt-3'>
            <img src={"promo-2.jpg"} className="App-logo" alt="promo-2" />
          </div>
          <div className='col-md-3 mt-3'>
            <img src={"promo-3.jpg"} className="App-logo" alt="promo-35" />
          </div>
          <div className='col-md-3 mt-3'>
            <img src={"promo-4.jpg"} className="App-logo" alt="promo-4" />
          </div>
        </div>
      </div>

      <footer>
        <div className='container game-service-provider'>
          <h2 className='mt-4'>Game Service Provider</h2>
          <img src={"footer.png"} className="App-logo jackpot mt-3" alt="footer" />
        </div>
        <div className='App-footer'>
          <div className="footer-links mt-3">
            <Link to="/" className='nav-link'>Deposit</Link>
            <Link to="/" className='nav-link'>Withdraw</Link>
            <Link to="/" className='nav-link'>Money Transfer</Link>
            <Link to="/" className='nav-link'>1:1 Inquiry</Link>
            <Link to="/" className='nav-link'>Notice</Link>
            <Link to="/" className='nav-link'>FAQ</Link>
            <Link to="/" className='nav-link'>Affiliates</Link>
            <Link to="/" className='nav-link'>Mobile</Link>
            <Link to="/" className='nav-link'>Live Chat</Link>
          </div>

          <p className='mt-4 fw-bold '>©2024 • <span className='K'>K</span>CASINO All rights reserved
            <img src={"18.png"} className='ms-2' alt="footer" /></p>
        </div>
      </footer>
    </div >
  );
}

export default App;
