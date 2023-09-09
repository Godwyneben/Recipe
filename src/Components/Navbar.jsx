import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContext'

// styles 
import './Navbar.css'

// components 
import SearchBar from './searchBar'

export default function Navbar() {

  const { color } = useContext(ThemeContext)

  return (
    <div className='navbar' style={{ background: color }}>
      <nav>
        <Link to="/" className="brand">
          <h1>Hilda</h1>
        </Link>

        <SearchBar />
        
        <Link to="/create">
          <h1>Create Recipe</h1>
        </Link>
      </nav>
    </div>
  )
}
