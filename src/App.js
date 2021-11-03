// components
import Hero from './pages/Hero';
import About from './pages/About';
import Projects from './pages/Projects';
import Footer from './components/Footer';

// styles
import './styles.css';
import './breakpoints.css';

function App() {
  return (
    <>
      <main>
        <Hero />
        <About />
        <Projects />
      </main>
      <Footer />
    </>
  );
}

export default App;
