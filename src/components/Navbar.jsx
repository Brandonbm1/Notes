import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faPlus } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to='/' className='navbar__title'>

        <p><FontAwesomeIcon icon={faHome} className="icon navbar__icon"/>Brandon Notes</p>
      </Link>
      <Link to='new' className='button'>
        <p><FontAwesomeIcon icon={faPlus} className="icon" />Add new Note</p>
      </Link>
    </nav>
  )
}

export default Navbar