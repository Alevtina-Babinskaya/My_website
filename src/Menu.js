import React from 'react';
import { NavLink } from 'react-router-dom';

const menuItems = [
  { id: 1, name: 'Portfolio', path: '/' },
  { id: 2, name: 'Resume', path: '/resume' },
  { id: 3, name: 'Contacts', path: '/contacts' },
  { id: 4, name: 'Notes', path: '/notes' },  
];

function Menu ({ items, onSelect }) {
  return (
    <ul className="menu">
      {menuItems.map((item) => (
        <li key={item.id} className="menu-item">
          <NavLink to={item.path} className="navLink">
          {item.name} 
          </NavLink>
        </li>
        
      ))}
    </ul>
  );
}
export default Menu;
