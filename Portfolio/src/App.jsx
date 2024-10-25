import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Menu } from './component/Menu/Menu'
import { Home } from './component/Home/Home'
import { BackgroundHome } from './ui/Background';
import { About } from './component/About/About';
import { Technology } from './component/Technology/Technology';
import { Projects } from './component/Projects/Projects';
import { menuItems } from './utils/constants';
import { Footer } from './component/Footer/Footer';

function App() {

  return (
    <>
      <BackgroundHome />
      <Menu items={menuItems} />
      <Home />
      <About />
      <Technology />
      <Projects />
      <Footer />
    </>
  )
}

export default App
