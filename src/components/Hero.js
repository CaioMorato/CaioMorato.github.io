import { useState } from 'react';

function Hero() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div id="hero">
      <header id="header">
        <div id="logo">Morato</div>
        <nav id="nav">
          <button className="btn-menu" type="button" onClick={() => setShowMenu(!showMenu)}>
            Menu
          </button>
          <ul id="menu" className={showMenu ? 'showMenu' : 'hideMenu'}>
            <li>Início</li>
            <li>Sobre</li>
            <li>Projetos</li>
            <li>Contato</li>
          </ul>
        </nav>
      </header>
      <section>
        <h1>Welcome!</h1>
      </section>
    </div>
  );
}

export default Hero;
