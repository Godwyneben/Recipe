import { Link } from 'react-router-dom'

// styles 
import './Navbar.css'

export default function Navbar() {
  return (
    <div className='navbar'>
      <nav>
        <Link to="/" className="brand">
          <h1>Hilda</h1>
        </Link>

        <Link to="/create">
          <h1>Create Recipe</h1>
        </Link>
      </nav>
    </div>
  )
}
