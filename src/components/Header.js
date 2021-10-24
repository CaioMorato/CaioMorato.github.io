//styles
import '../styles.css';
import { GrLinkedin, GrGithub } from 'react-icons/gr';
import { AiOutlineMail } from 'react-icons/ai';

function Header() {
  return (
    <header id="header">
      <h1>Caio Morato</h1>
      <h2>Fullstack_dev</h2>
      <nav>
        <ul>
          <li>
            <a
              aria-label="linkedin"
              rel="noreferrer"
              href="https://www.linkedin.com/in/morato-dev/"
              target="_blank"
            >
              <GrLinkedin />
            </a>
          </li>
          <li>
            <a
              aria-label="github"
              rel="noreferrer"
              href="https://www.github.com/CaioMorato"
              target="_blank"
            >
              <GrGithub />
            </a>
          </li>
          <li>
            <a
              aria-label="e-mail"
              rel="noreferrer"
              href="mailto:morato_dev@protonmail.com"
              target="_blank"
            >
              <AiOutlineMail />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
