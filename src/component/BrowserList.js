import React from 'react';
import Browser from './Browser';
import Footer from './Footer';
import Navigation from './Navigation';
import './BrowserList.scss';

const LINKS = [
    { label: 'Home', to: "home"},
    { label: 'About', to: "about"},
    { label: 'Contact', to: "contact"}
]

export default function BrowsersList({ list }) {
  return (
    <article className='BrowsersList'>
      <Navigation links={LINKS} />
      <header>
        <h1>Popular web browser</h1>
      </header>
      <ul>
        {list.map((browser, i) => (
          <Browser key={i} {...browser} />
        ))}
      </ul>
      <Footer />
    </article>
  );
}
