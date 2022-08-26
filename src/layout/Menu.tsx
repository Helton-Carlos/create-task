import logo from '../assets/logo.svg'
import { BeakerIcon } from '@heroicons/react/24/solid'

function Main() {
  return (
    <div className="bg-white w-[302px] h-screen border-b-2 text-center">
      <div className='p-8'>
        <img src={logo} className="logo" alt="logo" />
      </div>
      <div className='flex items-center text-gray-500 font-medium mx-6 p-2 hover:bg-indigo-500 hover:rounded-xl hover:text-white'>
        <BeakerIcon className="h-4 w-4" />
        <span className='pl-2'>Dashboard</span>
      </div>
    </div>
  )
}

export default Main
