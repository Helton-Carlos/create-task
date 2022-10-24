import persona from '../assets/persona.jpg'

type TCardTask = {
  name?: string,
  func?: string
}

function CardTask(props: TCardTask) {
  return (
    <div className="bg-white w-[250px] shadow border-b-2">
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        <div className="group relative">
          <div className="w-[250px]">
            <img src={persona} className="persona" alt="persona" />
          </div>
          <div className="p-2 flex justify-between">
            <div>
              <strong className="text-sm text-gray-700">
                { props.name }
              </strong>
              <p className="mt-1 text-sm text-gray-500">{ props.func }</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default CardTask
