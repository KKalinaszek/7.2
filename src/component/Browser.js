import React from 'react';
import './Browser.scss';

export default function Browser({ name, logo, description }) {
  return (
    <section>
      <h1>{name}</h1>
      <img src={logo} alt="logo"></img>
      <p>{description}</p>
    </section>
  );
}
