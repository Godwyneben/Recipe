import { Link } from 'react-router-dom'

// styles 
import './Recipelist.css'

export default function Recipelist({ recipes }) {
  return (
    <div className="recipe-list">
      {recipes.map( recipe => (
        <div key={recipe.id} className="card">
            <h3>{recipe.title}</h3>
            <h3>{recipe.cookingTime} to prepare.</h3>
            <div>{recipe.method.substring(0, 100)}...</div>
            <Link to={`/recipes/${recipe.id}`}>Go to Kitchen</Link>
        </div>
      ))}
    </div>
  )
}

