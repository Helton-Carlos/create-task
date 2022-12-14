import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom'
import { BsFillBookmarkDashFill, AiFillShop, FaHospitalUser, RiMoneyDollarCircleFill, AiFillCreditCard } from 'react-icons/all';


export function Menu() {
  return (
    <div className="bg-white w-[302px] h-screen border-2 text-center">
      <div className='p-8'>
        <Link to="/">
          <img src={ logo } className="logo" alt="logo" />
        </Link>
      </div>

      <div>
        <Link to="/" className='flex items-center text-gray-500 font-medium my-2 mx-6 px-4 py-2 hover:bg-indigo-500 hover:rounded-3xl hover:text-white'>
          <BsFillBookmarkDashFill className='mr-2' /> Dashboard
        </Link>

        <Link to="/task" className='flex items-center text-gray-500 font-medium my-2 mx-6 px-4 py-2 hover:bg-indigo-500 hover:rounded-3xl hover:text-white'>
          <AiFillShop className='mr-2' /> Task
        </Link>

        <Link to="/customers" className='flex items-center text-gray-500 font-medium my-2 mx-6 px-4 py-2 hover:bg-indigo-500 hover:rounded-3xl hover:text-white'>
          <FaHospitalUser className='mr-2' /> Customers
        </Link>

        <Link to="/income" className='flex items-center text-gray-500 font-medium my-2 mx-6 px-4 py-2 hover:bg-indigo-500 hover:rounded-3xl hover:text-white'>
          <RiMoneyDollarCircleFill className='mr-2' /> Income
        </Link>

        <Link to="/promote" className='flex items-center text-gray-500 font-medium my-2 mx-6 px-4 py-2 hover:bg-indigo-500 hover:rounded-3xl hover:text-white'>
          <AiFillCreditCard className='mr-2' /> Promote
        </Link>
      </div>
    </div>
  )
}
