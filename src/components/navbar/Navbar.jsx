import React,{ useState, useContext} from 'react'
import './navbar.css'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logocar-transformed.png'
import {  Link } from "react-router-dom";
import { AuthContext } from '../../components/AuthContext/AuthContext';
import { FiUser } from "react-icons/fi";


const Menu = () => (
  <>
     <Link to="/"><p>Home</p> </Link> 
     <Link to="/booking"><p>Booking</p> </Link>
     <Link to="/"><p>Products</p> </Link>
     <Link to="/"><p>About us</p> </Link>
     <Link to="/"><p>Contacts</p> </Link>
  </>
 )

 const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const { user, authenticated, logout } = useContext(AuthContext); // Use o contexto de autenticação
  console.log(user)
  console.log(authenticated)

  return (
    <div className='navbar'>
      <div className="navbar-links">
        <div className="navbar-links_logo">
          <img className='img' src={logo} alt="logo" />
          <Link to="/"> 
            <h1 className='title'>Car Wash</h1>
          </Link>
        </div>
        <div className="navbar-links_container">
         <Menu />
         {user && <Link to="/"><p onClick={logout}>Logout</p></Link> }
        </div>
      </div>
      <div className="navbar-sign">
        {user ? (
          <>
            <div className='userDiv'>
              <p className='userIcon'><FiUser color='#000' size={27}/></p>
              <p className='user'>{user.user.nome + ' ' + user.user.sobrenome}</p> {/* Exibir o nome do usuário logado */}
              
            </div>
           
          </>
        ): (
          <>
           <Link to="/login"> 
            <button type='button' className='primary-btn'>Sign In</button>
           </Link>
           <Link to="/register"> 
            <button type='button' className='secondary-btn'>Sign Up</button>
           </Link>
          </>
        )}
      </div>
      <div className="navbar-menu">
        {toggleMenu ? 
        <RiCloseLine  color="#fff" size={27} onClick={() => setToggleMenu(false)} /> 
        : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
          <div className="navbar-menu_container scale-up-center" >
            <div className="navbar-menu_container-links">
             <Menu />
            </div>
            <div className="navbar-menu_container-links-sign">
            {user ? (
              <>
              <Link to="/create"> 
                <button type='button' className='primary-btn' >Create</button>
              </Link>
              <p>{user.user.fullName}</p> {/* Exibir o nome do usuário logado */}
              </>
            ): (
              <>
              <Link to="/login"> 
              <button type='button' className='primary-btn'>Sign In</button>
              </Link>
              <Link to="/register"> 
                <button type='button' className='secondary-btn'>Sign Up</button>
              </Link>
              </>
            )}
           
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar
