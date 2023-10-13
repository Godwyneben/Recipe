import { projectFirestore }  from '../../fireBase/conFig'
import { useEffect, useState } from 'react'

// Styles 
import './Home.css'

// components 
import Recipelist from '../../Components/Recipelist'


export default function Home() {
  const  [data, setData]  = useState(null)
  const  [isPending, setIsPending]  = useState(false)
  const  [error, setError]  = useState(false)
  
  useEffect(()=> {
    setIsPending(true)

    const unsub = projectFirestore.collection('Recipes').onSnapshot((snapshot) => {
      if (snapshot.empty) {
        setError('No recipes to load')
        setIsPending(false)
      } else {
        let results = []
        snapshot.docs.forEach(doc => {
          results.push({ id:doc.id, ...doc.data() })
        })
        setData(results)
        setIsPending(false)
      }
    }, (err) => {
      setError(err.message)
      setIsPending(false)
    }) 

    return () => unsub()

  }, [])

  return (
    <div className="home">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Wait a sec...</p>}
      {data && <Recipelist recipes={data}/> }
    </div>
  )
}
