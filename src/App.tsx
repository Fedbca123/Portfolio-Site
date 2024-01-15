import { useContext, FC } from 'react';
import { ThemeContext } from './contexts/theme.tsx'
import Header from './components/Header/Header';
import About from './components/About/About.tsx'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer.tsx'
import './App.css';
import Exp from './components/Work Exp/Exp';

const App: FC = () => {
  
  const [{ themeName }] = useContext(ThemeContext);

  return (
    <div id='top' className={`${themeName} app`}>
      <Header />

      <main>
        <About />
        <Exp />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <ScrollToTop />
      <Footer />
    </div>
  )
}

export default App;
