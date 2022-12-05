import React from 'react';
import { Link } from 'react-router-dom'

export default function Header(props) {
  return (
    <header className="block row center">
      <div>
        <a href="#/">
          <h1>Grainhub  shopping cart</h1>
        </a>
      </div>
      <Link to="/" className="cartlogo">
        GrainHub
      </Link>
      <div>
        <a href="#/cart">
          Cart:{' '}
          {props.countCartItems ? (
            <button className="badge">{props.countCartItems}</button>
          ) : (
            'None'
          )}
        </a>{' '}
      </div>
    </header>
  );
}
