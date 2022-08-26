import Card from "../components/Card"
import { useState } from 'react'

function Index() {
  const [name, setName] = useState<string>('Talita')
  
  return (
    <div>
      <h1 className="font-bold text-2xl mb-8">Hello { name } 👋🏼,</h1>
      <Card title='name' subtitle='name2'/>
    </div>
  )
}

export default Index
