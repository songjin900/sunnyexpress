import { useState } from "react";


export default function Nav() {
    let [open, setOpen] = useState(false);

    return (
        <div className="shadow-md w-full fixed top-0 left-0">
            <div className="md:flex items-center justify-between bg-red-300 py-4 md:px-10 px-7">
                <div className="font-bold text-2xl cursor-pointer flex items-center text-gray-800">
                    <span className="text-3xl text-indigo-600 mr-1 pt-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                        </svg>
                    </span>
                    Designer
                </div>
                <div onClick={()=>setOpen(!open)} className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                    </svg>

                </div>
                <ul className={`bg-teal-300 md:flex md:items-center md:pb-0 pb-12 absolute
                 md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9
                  transition-all duration-500 ease-in ${open? "top-20 opacity-100":"top-[-490px] md:opacity-100 opacity-0"}`}>
                    <li className="md:ml-8 text-xl md:my-0 my-7">
                        <a >home</a>
                    </li>
                    <li className="md:ml-8 text-xl md:my-0 my-7">
                        <a >service</a>
                    </li>
                    <li className="md:ml-8 text-xl md:my-0 my-7">
                        <a >about</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}