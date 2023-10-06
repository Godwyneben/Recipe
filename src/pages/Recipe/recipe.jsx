import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { projectFirestore }  from '../../fireBase/conFig'


// Styles 
import './recipe.css'

export default function Recipe() {
  const { id } = useParams()

  const  [recipe, setRecipe]  = useState(null)
  const  [isPending, setIsPending]  = useState(false)
  const  [error, setError]  = useState(false)

  useEffect(() => {
     setIsPending(true)

     projectFirestore.collection('Recipes').doc(id).get().then((doc) => {
      if (doc.exists) {
       setIsPending(false)
       setRecipe(doc.data()) 
      } else {
        setIsPending(false)
        setError('Recipe not found')
      }
     })
  }, [id])

  return (
    <div className='recipe'>
      {error && <p className='error'>{error}</p>}
      {isPending && <p className='loading'>Wait a sec...</p>}
      {recipe && (
        <>
          <h1 className="page-title">{recipe.title}</h1>
          <p className='time'>Takes {recipe.cookingTime} to cook.</p>
          <ul>
            {recipe.ingredients.map(ing => <li key={ing}>{ing}</li>)}
          </ul>
          <p className="method">{recipe.method}</p>
        </>
      )}
    </div>
  )
}
