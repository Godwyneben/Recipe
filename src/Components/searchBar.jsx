import { useState } from 'react'
import { useHistory } from 'react-router-dom'

// styles 
import './searchBar.css'


export default function SearchBar() {
    const [term, setTerm] = useState('')
    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()

        history.push(`/search?q=${term}`)
    }


  return (
    <div className="searchBar">
        <form onSubmit={handleSubmit}>
            <label htmlFor="search">Search:</label>
            <input 
                type="text"
                id="search" 
                onchange={(e) => setTerm(e.target.value)}
                required
            />
        </form>
    </div>
  )
}
