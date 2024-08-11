import Linker from '../Linker'

export default function Navbar() {
    return (
        <header className="navbar w-screen h-[20px] text-tertiary flex items-center justify-center my-10 lg:my-12">
        <div className="w-screen flex items-center justify-around">
          <img src={Linker.Logo.green.path} alt={Linker.Logo.green.component} width={50} />
            <nav className='Navbar'>
              <ul className='hidden sm:justify-center sm:text-[15px] md:text-[17px] md:flex md:space-x-[5vw] font-bold'>
                <li><a className='hover:underline hover:text-quaternary' href="/">Home</a></li>
                <li><a className='hover:underline hover:text-quaternary' href="/profile">Profile</a></li>
                <li><a className='hover:underline hover:text-quaternary' href="/project">Project</a></li>
                <li><a className='hover:underline hover:text-quaternary' href="/blog">blog</a></li>
                <li><a className='hover:underline hover:text-quaternary' href="/research">Research</a></li>
              </ul>
            </nav>
        </div>
      </header>
    )
}