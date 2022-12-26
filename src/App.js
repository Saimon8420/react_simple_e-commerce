import { Route, Routes } from 'react-router-dom';
import './App.css';
import NotFound from './components/NotFound/NotFound';
import CartProduct from './components/Product/AddCartProducts/CartProduct';
import Confirm from './components/Product/AddCartProducts/Confirm';
import Footer from './components/Product/Footer/Footer';
import Header from './components/Product/Header/Header';
import LoadProduct from './components/Product/LoadProduct';
import LogIn from './components/Product/LogIn/LogIn';
import Protected from './components/Product/ProtectedRoute/Protected';
import SignUp from './components/Product/SignUp/SignUp';
import EachItem from './components/Product/SingleProduct/EachItem';
import Profile from './components/Product/UserProfile/Profile';

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <Routes>
          <Route path='/' element={<LoadProduct />}
          ></Route>

          <Route path='/home' element={<LoadProduct />}
          ></Route>

          <Route path='/home/eachItem' element={<EachItem />}
          ></Route>

          <Route path='/home/cartItem' element={<CartProduct />}
          ></Route>

          {/* <Route path='/confirm' element={<Confirm />}></Route> */}

          <Route path='/login' element={<LogIn />}></Route>

          <Route path='/signUp' element={<SignUp />}></Route>

          <Route path='/profile' element={<Profile />}></Route>

          <Route path='/confirm' element={
            <Protected>
              <Confirm />
            </Protected>
          }
          ></Route>

          <Route path='*' element={<NotFound />}
          ></Route>

        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
