
import Linker from "../Linker"

export default function NoPage() {
    return (
        <>
            <div className="cardNoPage text-tertiary w-screen h-[100vh] flex flex-row items-center justify-center space-x-2 md:space-x-3 lg:space-x-5">
                <img src={Linker.NoPage.path} alt="404" className="w-[30vw] md:w-[25vw] lg:w-[10vw]"/>
                <h1 className="text-[5vw] md:text-[3vw] lg:text-[1.5vw] font-bold">Page<br/>Not Found</h1>
            </div>
        </>
    )
}