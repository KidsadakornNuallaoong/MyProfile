import React from 'react'
const Header = React.lazy(() => import('../components/header'))
import Linker from '../Linker'

function Home() {

  return (
    <>
        <Header />
        <div className="container text-tertiary flex row-auto max-screen items-center justify-between mt-20">
          <article className='w-[35rem]'>
            <h1 className='text-[3rem] font-bold flex items-start text-left'>Kidsakorn Nuallaoong</h1>
            <p className='flex text-left'>Hello welcome to my web prefile, and here I proud to present about my profile, activity, research, competition or etc. Enjoy with my profile </p>
          <div className="btn-wrapper mt-10 flex justify-start">
            <button className="btn bg-quaternary w-[170px] h-[56px] text-[20px] text-primary rounded-[10px] font-bold mr-[18px] active:bg-transparent active:text-quaternary active:border-quaternary active:border-2">Download CV</button>
            <button className="btn bg-secondary w-[94px] h-[56px] text-[20px] text-tertiary rounded-[10px] font-bold mr-[18px] active:bg-transparent active:text-quaternary">Contact</button>
          </div>
          </article>
          <div className="card w-[530px] h-[630px] bg-[#10111E] border-[#72758F] border-2 rounded-[25px] flex justify-center items-start">
            <img src={Linker.Me.path} alt={Linker.Me.component} className='w-[193px] rounded-[100%]'/>
          </div>
        </div>
    </>
  )
}

export default Home