import { useFetch } from '../../Hooks/useFetch'

// styles 
import './home.css'

// Components 
import Recipelist from '../../Components/Recipelist'

export default function Home() {
  const {data, isPending, error} = useFetch('http://localhost:3000/recipes')

  return (
    <div className='home'>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && <Recipelist recipes={data}/>}
    </div>
  )
}
