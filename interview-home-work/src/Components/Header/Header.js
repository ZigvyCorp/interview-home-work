import React from "react";
import './Header.scss';

export default function Header() {
  return <header className="header">
    <div className="header__item logo">Logo</div>
    <div className="header__item center">Blogs</div>
    <div className="header__item user">
      <div className="header__item--avatar">A</div>
      <div className="header__item--name">Adam Levine</div>
    </div>
  </header>;
}
