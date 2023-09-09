import { Link } from 'react-router-dom'

// styles 
import './Recipelist.css'

export default function Recipelist({ recipes }) {
  
  if (recipes.length === 0) {
    return <div className='error'>No recipes found</div>
  }

  return (
    <div className="recipe-list">
      {recipes.map(recipe => (
        <div key={recipe.id} className="card">
            <h3>{recipe.title}</h3>
            <p>{recipe.cookingTime} to prepare.</p>
            <div>{recipe.method && recipe.method.substring(0, 100)}...</div>
            <Link to={`/recipes/${recipe.id}`}>Head to Kitchen</Link>
        </div>
      ))}
    </div>
  )
}

