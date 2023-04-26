import React from 'react';

export default function Browser({ name, logo, description }) {
  return (
    <section>
      <h1>{name}</h1>
      <img src={logo} alt="logo" height="100"></img>
      <p>{description}</p>
    </section>
  );
}
