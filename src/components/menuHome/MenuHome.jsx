import React,{ useState, useContext} from 'react'
import './menuHome.css'
import {  Link } from "react-router-dom";
import { AuthContext } from '../AuthContext/AuthContext';
import { FiUser } from "react-icons/fi";


const Menu = () => (
  <>
     <Link to="/"><p>My Cars</p> </Link>
     <Link to="/"><p>Services</p> </Link>
     <Link to="/"><p>Explore</p> </Link>
  </>
 )

 const MenuHome = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const { user, authenticated, logout } = useContext(AuthContext); // Use o contexto de autenticação
  console.log(user)
  console.log(authenticated)

  return (
    <div className='navbarHome'>
      <div className="navbar-links-home">
        <div className="navbar-links_container">
         <Menu />
        </div>
      </div>
    </div>
  )
}

export default MenuHome
