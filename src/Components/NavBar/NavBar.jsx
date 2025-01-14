import React, { useState } from 'react'
import './NavBar.scss'
import logo from '../../assets/img/360_F_316502266_72siD6YwZWCJd9rtwvoCkHmWf8bfhyLf-removebg-preview.png'
import { Link } from 'react-router-dom'
import { HiX } from 'react-icons/hi'
import { FaBars } from 'react-icons/fa'




const data = [
  {
    label: 'HOME',
    to: '/'
  },
  {
    label: 'ABOUT',
    to: '/about'
  },
  {
    label: 'SKILLS',
    to: '/skills'
  },
  {
    label: 'PORTFOLIO',
    to: '/portfolio'
  },
  {
    label: 'CONTACT',
    to: '/contact'
  },
]

function NavBar() {
  const [toggleIcon, setToggleIcon] = useState(false)
  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);

    
  };
  return ( 
  <header>
    <div className='container'>
     
      <nav className='navbar'>
        <div className='navbar_container '>
          <Link to={'/'} className='navbar_container_logo'>
            <img  src={logo} width={100} alt="" />
          </Link>
        </div>
        <ul className={`navbar_container_menu ${toggleIcon ? `active` : ''}`}>
          {
            data.map((item, key) => (
              <li key={key} className='navbar_container_menu_item'>
                <Link className='navbar_container_menu_item_links' to={item.to}>
                  {item.label}</Link>
              </li>
            ))
          }

        </ul>
        <div className='nav-icon' onClick={handleToggleIcon}>
          {
            toggleIcon ? < HiX size={30}/> : <FaBars size={30}/>
          }
        </div>
      </nav>
    
    </div>  </header>
  )

}

export default NavBar
