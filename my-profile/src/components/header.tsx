import Linker from '../Linker'

export default function Header() {
    return (
        <header className="navbar w-screen text-tertiary flex items-center justify-center mt-7 lg:mt-10">
        <div className="w-screen flex items-center justify-around">
          <img src={Linker.Logo.white.path} alt={Linker.Logo.white.component} width={50} />
            <nav className=''>
              <ul className='hidden sm:justify-center sm:text-[15px] md:text-[17px] md:flex md:space-x-[7vw] lg:space-x-[7vw] '>
                <li><a className='hover:underline hover:text-quaternary' href="/">Home</a></li>
                <li><a className='hover:underline hover:text-quaternary' href="/profile">Profile</a></li>
                <li><a className='hover:underline hover:text-quaternary' href="/project">Project</a></li>
                <li><a className='hover:underline hover:text-quaternary' href="/service">Service</a></li>
                <li><a className='hover:underline hover:text-quaternary' href="/research">Research</a></li>
              </ul>
            </nav>
        </div>
      </header>
    )
}