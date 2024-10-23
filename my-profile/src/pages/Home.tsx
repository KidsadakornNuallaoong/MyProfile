import Linker from '../Linker'
import React from 'react'
const Navbar = React.lazy(() => import('../components/Navbar'))

function Home() {

  return (
    <>
      <Navbar />
        {/* // * Section 1 */}
        <div className="text-tertiary flex flex-col md:flex-row space-y-[5rem] max-screen items-center justify-evenly md:space-y-0 md:space-x-[5rem] mt-20 md:mt-[10vh] 2xl:mt-[16vh] px-5 md:px-12 lg:px-20">
          <article className='w-[20rem] lg:w-[35rem] flex flex-col items-center md:items-start'>
            <h1 className='text-[1.5rem] md:text-[1.9rem] lg:text-[2.7rem] font-bold flex justify-center md:items-start md:text-left'>Kidsadakorn Nuallaoong</h1>
            <p className='flex whitespace-pre-line text-center text-[12px] w-[20rem] md:w-[15rem] lg:w-fit md:text-[12px] lg:text-[20px] md:text-left mt-[10px]'>Hello welcome to my web prefile, and here I proud to present about my profile, activity, research, competition or etc. Enjoy with my profile </p>
          <div className="btn-wrapper flex mt-[60px] justify-center md:justify-start">
            <button className="btn bg-quaternary w-[150px] h-[50px] text-[17px] rounded-[10px] md:w-[170px] md:h-[56px] md:text-[20px] text-primary font-bold mr-[18px] active:bg-transparent active:text-quaternary active:border-quaternary active:border-2">Download CV</button>
            <button className="btn bg-secondary w-[100px] h-[50px] text-[17px] md:w-[170px] md:h-[56px] md:text-[20px] text-tertiary rounded-[10px] font-bold mr-[18px] active:bg-transparent active:text-quaternary">Contact</button>
          </div>
          </article>
          <div className="card min-w-[300px] h-[450px] md:w-[100px] md:h-[400px] lg:w-[400px] lg:h-[600px] xl:w-[480px] xl:h-[650px] bg-[#10111E] border-[#72758F] border-2 rounded-[25px] flex justify-center items-start">
            <img src={Linker.Me.path} alt={Linker.Me.component} className='w-[120px] sm:w-[135px] md:w-[100px] lg:w-[180px] rounded-[100%] mt-[15%] md:mt-[25%]'/>
          </div>
        </div>

        {/* // * Section 2 */}
        <div className="w-[100vw] h-[900px] rounded-[25px] flex justify-self-center justify-center items-center my-20">
          <div className="w-[80vw] h-[100vh] md:h-[80vh] bg-secondary rounded-[25px] text-tertiary flex justify-center items-center space-x-[100px]">
              <div className="card-1 w-[500px] h-[589px] bg-primary rounded-[20px] border-[5px] border-secondary"></div>
              <div className="card-2 w-[500px] h-[589px] bg-primary rounded-[20px] border-[5px] border-secondary"></div>
          </div>    
        </div>

        {/* // * Section 3 */}
    </>
  )
}

export default Home