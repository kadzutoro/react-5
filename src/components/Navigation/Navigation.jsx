import { NavLink } from 'react-router-dom'
import css from './Navigation.module.css'
import clsx from 'clsx'

const changeActiveClass = ({ isActive }) => clsx(css.link, isActive && css.isActive)

export default function Navigation () {
  return (
    <nav className={css.nav}>
      <NavLink to='/' className={changeActiveClass}>Home</NavLink>
      <NavLink to='/payments' className={changeActiveClass}>Payments</NavLink>
    </nav>
  )
}