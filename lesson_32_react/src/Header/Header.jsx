import React from "react";
import "./Header.css";
import { Logo } from "./Logo";

export function Header() {
  return (
    <header className="header">
      <Logo />
      <p className="header__description">
        Edit <code>src/App.js</code> and save to reload.
      </p>

      <a
        className="header__link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  );
}
