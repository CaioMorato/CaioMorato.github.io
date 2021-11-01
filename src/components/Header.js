// vitals
import { useState } from 'react';
// styles
import { BsList } from 'react-icons/bs';

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header id="header">
      <div id="logo">Morato</div>
      <nav id="nav">
        <button className="btn-menu" type="button" onClick={() => setShowMenu(!showMenu)}>
          <BsList fill="white" size="30px" className="menu-icon" />
        </button>
        <ul id="menu" className={showMenu ? 'showMenu' : 'hideMenu'}>
          <a href="#top">
            <li>Início</li>
          </a>
          <a href="#about">
            <li>Sobre</li>
          </a>
          <a href="#projects">
            <li>Projetos</li>
          </a>
          <a href="#contact">
            <li>Contato</li>
          </a>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
