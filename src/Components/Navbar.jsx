import { Link } from 'react-router-dom'


// styles 
import './Navbar.css'

export default function Navbar() {
  return (
    <div className='navbar'>
      <nav>
        <Link to="/">
            <h1>Cook-A-Thon</h1>
        </Link>

        <Link to="/create">
            <h3>Create Recipe</h3>

        </Link>
      </nav>
    </div>
  )
}
