import './App.css';
import {Navbar,Footer} from './components'
import {Home,Profile,Item, Create,Login,Register,RegisterCar, Book} from './pages'
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from '../src/components/AuthContext/AuthContext'; // Importe o AuthProvider

function App() {

  return (
    <div>
      <AuthProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/booking" element={<Book />} />
              <Route path=":item/:id" element={<Item />} />
              <Route path="/create" element={<Create /> } />
              <Route path="/profile/:id" element={<Profile />} />
              <Route path="/login" element={ <Login />} />
              <Route path="/register" element={ <Register/>} />
              <Route path="/addCars" element={ <RegisterCar/>} />
            </Routes>
      </AuthProvider>
      <Footer />
    </div>
  );
}

export default App;
