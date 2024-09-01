import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Menu } from './component/menu/Menu'
import { Home } from './component/Home/Home'
import { BackgroundHome } from './component/Background';

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
    </>
  )
}

export default App
