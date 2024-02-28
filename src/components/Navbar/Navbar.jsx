import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <header className="bg-[#121212] text-white font-inter flex items-center gap-10 py-5 px-16">
        <Link to="/"><img src="icons/logo.svg" alt="logo" className="w-[40px]"/></Link>
        <nav className="flex gap-5 items-center">
            <Link to="/features" className="hover:text-emerald-500 duration-300">Features</Link>
            <Link to="/updates" className="hover:text-emerald-500 duration-300">Updates</Link>
            <button className="border-2 py-1 px-4 rounded hover:bg-emerald-500 hover:text-white duration-100 hover:border-emerald-500">Login</button>
        </nav>
    </header>
  )
}

export default Navbar