import Button from './Button'
import persona from '../assets/persona.png'

type TCard = {
  title: string,
  subtitle: string
}

function Card(props: TCard) {
  const addFuncion = () => {
    alert('hey')
  }

  return (
    <div className="max-w-screen-sm py-2 px-8 bg-white shadow-lg rounded-lg my-20">
      <div className="flex justify-center md:justify-end -mt-16">
        <img className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500" src={persona} alt="persona" />
      </div>
      <div>
        <h2 className="text-gray-800 text-3xl font-semibold">{props.title}</h2>
        <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!</p>
      </div>
      <div className="flex justify-end mt-4">
        <Button text="See more" onClick={addFuncion} />
      </div>
    </div>
  )
}

export default Card
