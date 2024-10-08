import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Menu } from './component/Menu/Menu'
import { Home } from './component/Home/Home'
import { BackgroundHome } from './component/Background';
import About from './component/About/About';
import Technology from './component/Technology/Technology';
import Projects from './component/Projects/Projects';

const menuItems = [
  { id: 1, title: 'Home', link: '/#home' },
  { id: 2, title: 'About me', link: '/#about' },
  { id: 3, title: 'Technologies', link: '/#technologies' },
  { id: 4, title: 'Projects', link: '/#projects' },
  { id: 5, title: 'Contact', link: '/#contact' }
];
function App() {

  return (
    <>
      <BackgroundHome></BackgroundHome>
      <Menu items={menuItems}></Menu>
      <Home></Home>
      <About></About>
      <Technology></Technology>
      <Projects></Projects>
    </>
  )
}

export default App
