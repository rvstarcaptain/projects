import { NavLink, Outlet } from 'react-router-dom'
import './Nav.css'


import React from 'react'

export default function Nav() {
  return (
    <div className='nav'>
      <nav>
        <NavLink className="link" to="/category/top-wear-kurtas">TOP WEAR</NavLink>
        <NavLink className="link" to="/category/bottom-wear">BOTTOM WEAR</NavLink>
        <NavLink className="link" to="/category/footwear">FOOT WEAR</NavLink>
        <NavLink className="link" to="/category/w-cosmetics">COSMETICS</NavLink>
        <NavLink className="link" to="/category/drapes-wear">DRAPES</NavLink>
        
      </nav>
    </div>
  )
}
