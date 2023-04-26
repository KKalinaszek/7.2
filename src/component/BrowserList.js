import React from 'react';
import Browser from './Browser';
import Footer from './Footer';
import Navigation from './Navigation';

export default function BrowsersList({ list }) {
  return (
    <article>
      <Navigation />
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
