import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import Header from './components/Header'
import Home from './pages/Home'
import Login from './pages/Login'
import Account from "./pages/Account"
import Activities from "./pages/Activities"
import Register from './pages/Register'

function App() {
  return (
    <>
        <Router>
            <div className="container">
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/account' element={<Account />} />
                    <Route path='/activities' element={<Activities/>} />
                </Routes>
            </div>
        </Router>
        <ToastContainer />
    </>
  );
}

export default App;
