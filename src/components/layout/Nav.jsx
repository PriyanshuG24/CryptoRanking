import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect, useState, useContext } from 'react'
import CryptoCoinContext from '../../context/crypto/CryptoCoinContext'
import { toast } from 'react-toastify'
function Nav() {
    const { favCoinList } = useContext(CryptoCoinContext)
    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light")
    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme("dark")
            toast.success("Dark mode is enable !")
        } else {
            setTheme("light")
            toast.success("Light mode is enable !")
        }
    }
    useEffect(() => {
        localStorage.setItem("theme", theme)
        const localTheme = localStorage.getItem("theme")
        document.querySelector('html').setAttribute("data-theme", localTheme)
    }, [theme])
    return (
        <>
            <div className={`h-36  bg-blue-100`}>

            </div>
            <div className='border-2'>
                <div className={`navbar bg-dark`}>
                    <div className="flex-1">
                        <div className='ml-4'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34"><g fill="#32ef8f"><path d="M26.12,34a7.89,7.89,0,0,1-5.58-2.31L2.31,13.46A7.88,7.88,0,0,1,7.88,0H26.12A7.88,7.88,0,0,1,34,7.88V26.12A7.89,7.89,0,0,1,26.12,34Z" opacity=".35" /><path d="M7.88 34A7.89 7.89 0 0 1 2.31 20.54L20.54 2.31A7.88 7.88 0 1 1 31.69 13.46L13.46 31.69A7.87 7.87 0 0 1 7.88 34" /></g></svg>
                        </div>
                        <h1 className="font-semibold  text-xl ml-6">CRYPTOX</h1>
                    </div>
                    <div className="flex-none">
                        <div>
                            <Link to='/' className='font-semibold  text-xl mr-6'>Cryptocurrency</Link>
                            {/* <h1 className='font-semibold text-xl text-black mr-6'>Cryptocurrency</h1> */}
                        </div>
                        <div>
                            <Link to='/exchanges' className='hover:text-gray font-semibold text-xl mr-6'>Exchanges</Link>
                            {/* <h1 className='font-semibold  text-xl text-black mr-6'>Exchanges</h1> */}
                        </div>
                        <div className='flex space-x-4 items-center'>
                            <div>
                                <button className="btn btn-ghost btn-circle ">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                </button>
                            </div>
                            <div>
                                <Link to='/favourite'>
                                    <div className="indicator mr-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill={favCoinList.length === 0 ? 'none' : 'red  '} viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                                        {favCoinList.length !== 0 && (<span className="indicator-item badge round ">{favCoinList.length}</span>)}
                                    </div>

                                </Link>
                            </div>
                            <div>
                                <label className="swap swap-rotate">
                                    <input type="checkbox" onChange={handleToggle} />
                                    <svg className="swap-on fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>
                                    <svg className="swap-off fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>
                                </label>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Nav
