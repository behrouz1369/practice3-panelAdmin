import { Outlet } from "react-router-dom"
import Navigation from "../components/layout/Navigation"
import HeaderMain from "../components/layout/HeaderMain"

import { useSelector, useDispatch } from 'react-redux'


export default function  Root() {
    const isOpen = useSelector(state => state.menu.isOpenMenu)

    return(
        <>
            <div className="flex">
                {/* Navigations  */}
                <Navigation />

                {/* <!-- Main --> */}
                <main className={`main bg-gray-200 w-full h-screen ${isOpen ? 'ml0':'ml-[275px]'} transition-all duration-500`}>
                    {/* <!-- Nav Main Content --> */}
                    <HeaderMain />

                    {/* <!-- Header Content --> */}
                    <div className="bg-white border-b-2 border-t-2 p-3">
                        <p className="text-2xl font-semibold capitalize">articles</p>
                    </div>

                    {/* <!-- Content Main --> */}
                    <div>
                        <div className="container mx-auto">
                            <Outlet />
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}
