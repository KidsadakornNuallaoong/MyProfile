import Linker from '../Linker'

export default function Header() {
    return (
        <header className="navbar text-tertiary">
        <div className="container flex row-auto items-center justify-between">
          <img src={Linker.Logo.white.path} alt={Linker.Logo.white.component} width={50} />
          <nav className=''>
            <ul className='flex row-auto justify-between text-justify'>
              <li><a className='mx-10 hover:text-quaternary hover:font-bold hover:underline' href="/">Home</a></li>
              <li><a className='mx-10 hover:text-quaternary hover:font-bold hover:underline' href="/profile">Profile</a></li>
              <li><a className='mx-10 hover:text-quaternary hover:font-bold hover:underline' href="/project">Project</a></li>
              <li><a className='mx-10 hover:text-quaternary hover:font-bold hover:underline' href="/service">Service</a></li>
              <li><a className='mx-10 hover:text-quaternary hover:font-bold hover:underline' href="/research">Research</a></li>
            </ul>
          </nav>
        </div>
      </header>
    )
}