import React from 'react';
import './Navigation.scss';

const Navigation = ({ links }) => {
  return (
    <nav>
      <p>Navigation bar</p>
      <ul>
        {links.map(link => (
            <li key={link.to}>
                <a href={link.to}>{link.label}</a>
            </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
