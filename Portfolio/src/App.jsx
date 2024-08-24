import { useState } from 'react'
import './App.css'
import { Menu } from './component/menu/Menu'

const menuItems = [
  { id: 1, title: 'Home', link: '/#' },
  { id: 2, title: 'About me', link: '/#about' },
  { id: 3, title: 'Technologies', link: '/#technologies' },
  { id: 4, title: 'Projects', link: '/#trojects' },
  { id: 5, title: 'Contact', link: '/#contact' }
];
function App() {
  const [count, setCount] = useState(0)

  return (
    <Menu items={menuItems}></Menu>
  )
}

export default App
