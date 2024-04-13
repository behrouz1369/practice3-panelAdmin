import { useState } from "react";

import { useSelector, useDispatch } from 'react-redux'
import { toggleMenu } from "../../store/slices/menuSlice";


export default function HeaderMain() {
    const isOpen = useSelector(state => state.menu.isOpenMenu)

    const menuDispach = useDispatch()

    return(
        <>
            <div className="bg-white shadow-2xl shadow-gray-100">
                <div className="flex items-center gap-3 h-full">
                    {/* <!-- Button Hamburger --> */}
                    <button id="btn-hamburger" onClick={()=>menuDispach(toggleMenu(isOpen))} className="flex flex-col justify-center items-center gap-1 bg-orange-850 w-[65px] h-[55px]">
                        <span  className={`lineH w-1/2 h-1 rounded-full bg-gray-100 ${isOpen ? 'rotate-45 translate-y-2' : ''} transition-all duration-500`}></span>
                        <span  className={`lineH w-1/2 h-1 rounded-full bg-gray-100 ${isOpen ? 'opacity-0' : ''} transition-all duration-500`}></span>
                        <span  className={`lineH w-1/2 h-1 rounded-full bg-gray-100 ${isOpen ? '-rotate-45 -translate-y-2' : ''} transition-all duration-500`}></span>
                    </button>

                    {/* <!-- logo website --> */}
                    <div>
                        <img className="object-cover w-[200px] m-0" src="https://i.postimg.cc/brSXfv3S/article-Logo-10.png" alt="Logo Articles" />
                    </div>
                </div>
            </div>
        </>
    )
}
