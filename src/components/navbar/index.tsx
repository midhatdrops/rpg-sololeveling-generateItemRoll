import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

export function Navbar() {
  return (
    <nav className="navBar">
      <label>Solo Leveling RPG - Roll Generator</label>
      <Link to="/rpg-sololeveling-generateitemroll">
        <button className="ButtonNav">Translator</button>
      </Link>
      <Link to="/rpg-sololeveling-generateitemroll/leilao">
        <button className="ButtonNav">Leilao</button>
      </Link>
    </nav>
  );
}
