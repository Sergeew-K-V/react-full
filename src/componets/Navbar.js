import react from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => (
  <nav className='navbar navbar-dark navbar-expand-lg bg-dark ps-5'>
    <div className='navbar-brand'>Sergeew Furniture Shop</div>
    <ul className='navbar-nav'>
      <li className='nav-item'>
        <NavLink className='nav-link' to='/' exact>
          Главная
        </NavLink>
      </li>
      <li className='nav-item'>
        <NavLink className='nav-link' to='/about'>
          О нас
        </NavLink>
      </li>
    </ul>
  </nav>
)
