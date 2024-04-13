import Menu from "./menu/Menu";
import { useSelector, useDispatch } from 'react-redux'


export default function Navigation() {
    const isOpen = useSelector(state => state.menu.isOpenMenu)


    return(
        <>
            <div className={`menuNav fixed top-0 left-0 overflow-x-hidden bg-[#16283c] ${isOpen ? 'w-0':'w-[275px]'} h-full z-10 transition-all duration-500`}>
                <div className="flex flex-col w-full h-full">
                    {/* <!-- Header Nav Menu --> */}
                    <div>
                        {/* <!-- Profile --> */}
                        <div className="flex justify-center items-center gap-2 w-full py-3 bg-[#204162]">
                            <div className="w-[65px] h-[65px] rounded-full overflow-hidden">
                                <img className="object-cover w-full h-full m-0" src="https://i.postimg.cc/y6GBQMvS/person.jpg" alt="profile" />
                            </div>
                            <div className="flex flex-col justify-start
                            animate-fade-up animate-infinite
                            ">
                                <h3 className="text-lg text-gray-100 capitalize">john david</h3>
                                <p className="flex gap-1 items-center text-green-500 text-[13px] capitalize">
                                    <span className="relative flex h-3 w-3">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                                    </span>
                                    online
                                </p>
                            </div>
                        </div>

                        {/* <!-- General Header --> */}
                        <div className="border-b-2 border-[rgba(254,87,34,.5)] p-3">
                            <h2 className="text-2xl text-white capitalize">general</h2>
                        </div>
                    </div>

                    {/* <!-- Content Nav Menu --> */}
                    <div>
                        <Menu />
                    </div>
                </div>
            </div>
        </>
    )
}
