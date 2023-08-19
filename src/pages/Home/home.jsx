import { useFetch }  from '../../Hooks/useFetch'

// Styles 
import './Home.css'

// components 
import Recipelist from '../../Components/Recipelist'


export default function Home() {
  const { data, isPending, error } = useFetch('http://localhost:3000/recipes')
  
  return (
    <div className="home">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Wait a sec...</p>}
      {data && <Recipelist recipes={data}/> }
    </div>
  )
}
