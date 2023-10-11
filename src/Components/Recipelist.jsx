import { Link } from 'react-router-dom'
import Trashcan from '../Assets/delete.png'
import { projectFirestore } from '../fireBase/conFig'

// styles 
import './Recipelist.css'

export default function Recipelist({ recipes }) {
  
  if (recipes.length === 0) {
    return <div className='error'>No recipes found</div>
  }

  const handleClick = (id) => {
    projectFirestore.collection('Recipes').doc(id).delete()
  }

  return (
    <div className="recipe-list">
      {recipes.map(recipe => (
        <div key={recipe.id} className="card">
            <h3>{recipe.title}</h3>
            <p>{recipe.cookingTime} to prepare.</p>
            <div>{recipe.method && recipe.method.substring(0, 100)}...</div>
            <Link to={`/recipes/${recipe.id}`}>Head to Kitchen</Link>
            <img 
              className='delete'
              src={ Trashcan } 
              alt='delete'
              onClick={() => handleClick(recipe.id)}
            />
        </div>
      ))}
    </div>
  )
}

