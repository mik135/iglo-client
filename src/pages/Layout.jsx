import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'


const Layout = () => {
  return (
    <div className='relative max-w-[100vw] overflow-hidden'>
        <Navbar />
        <Outlet />
    </div>
  )
}

export default Layout