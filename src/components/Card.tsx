import { useState } from 'react'

function Card() {
    const [name, setCount] = useState<string>('Create task')

  return (
    <div className="App">
     <h1>{name}</h1>
    </div>
  )
}

export default Card
