import { useParams } from 'react-router-dom'
import { useFetch } from '../../Hooks/useFetch'

// Styles 
import './recipe.css'

export default function Recipe() {
  const { id } = useParams()
  const url = ' http://localhost:3000/recipes/' + id
  const { data: recipe, isPending, error } = useFetch(url)

  return (
    <div className='recipe'>
      {error && <p className='error'>{error}</p>}
      {isPending && <p className='loading'>Wait a sec...</p>}
      {recipe && <h1>{recipe.title}</h1>}
    </div>
  )
}
