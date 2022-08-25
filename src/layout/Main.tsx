import { useState } from 'react'

function Card() {
  const [name, setCount] = useState<string>('Create task')

  return (
    <div className="bg-white w-full h-[60px] border-b-2 z-50">
      <div className='flex justify-between row-auto items-center pt-1'>
        <div>
          <h1 className='text-3xl font-bold'>{name}</h1>
        </div>
        <div>
          <button className='bg-indigo-700 text-white px-4 py-1 rounded-lg'>Sair</button>
        </div>
      </div>
    </div>
  )
}

export default Card
