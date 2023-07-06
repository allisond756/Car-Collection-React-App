import { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from './Button';
import { useAuth0 } from '@auth0/auth0-react';

function Navbar() {
    const [isVisible, setIsVisible] = useState(false);
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    const signOutOnClick = () => {
        logout();
    };

    const signInOnClick = () => {
        loginWithRedirect();
    };

    const dropDown = () => {
        setIsVisible(!isVisible)
    };

    const clicked = () => {
        setIsVisible(false)
    };

    return (
        <nav className='flex items-center justify-between flex-wrap bg-gradient-to-r from-emerald-950 to-teal-900 p-6'>
            <div className='flex items-center flex-shrink-0 text-orange-600 mr-6'>
                <Link to ='/' className='font-semibold text-2xl tracking-wider bg-amber-300 rounded p-2 border border-orange-600'>The Garage</Link>
            </div>
            <div className="block">
                <button 
                    onClick={dropDown}
                    className='flex items-center px-3 py-2 bg-amber-300 text-orange-600 border border-orange-600
                    rounded hover:text-amber-100 hover:border-amber-100'>
                    <i className="fas fa-bars"></i>
                </button>
            </div>
            { isVisible ? ( 
                <div className='w-full block flex-grow items-center'>
                    <div className='text-sm lg:flex-grow ms-auto w-fit mr-10'>
                        <Button className='p-3 m-5 bg-amber-300 border border-orange-600 justify-center rounded'>
                            <div>
                                <Link to='/' onClick={ clicked } className='flex place-items-center lg:inline-block lg:mt-0
                                font-medium text-orange-600 hover:text-amber-100 text-base'>
                                    Home
                                </Link>
                            </div>
                        </Button>
                        <Button className='p-3 m-5 bg-amber-300 border border-orange-600 justify-center rounded'>
                            <div>
                                <Link to='/about' onClick={ clicked } className='flex place-items-center lg:inline-block lg:mt-0
                                font-medium text-orange-600 hover:text-amber-100 text-base'>
                                    About
                                </Link>
                            </div>
                        </Button>
                        <Button className='p-3 m-5 bg-amber-300 border border-orange-600 justify-center rounded'>
                            <div>
                                <Link to='/contact' onClick={ clicked } className='flex place-items-center lg:inline-block lg:mt-0
                                font-medium text-orange-600 hover:text-amber-100 text-base'>
                                    Contact Us
                                </Link>
                            </div>
                        </Button>
                        <Button className='p-3 m-5 bg-amber-300 border border-orange-600 justify-center rounded'>
                            <div>
                                <Link to='/dashboard' onClick={ clicked } className='flex place-items-center lg:inline-block lg:mt-0
                                font-medium text-orange-600 hover:text-amber-100 text-base'>
                                    Dashboard
                                </Link>
                            </div>
                        </Button>
                        {
                            !isAuthenticated ?
                            <Button className='p-3 m-5 bg-amber-300 border border-orange-600 justify-center rounded'>
                                <div>
                                    <Link to='/' onClick={signInOnClick} className='flex place-items-center lg:inline-block lg:mt-0
                                    font-medium text-orange-600 hover:text-amber-100 text-base'>
                                        Login
                                    </Link>
                                </div>
                            </Button>
                            :
                            <Button className='p-3 m-5 bg-amber-300 border border-orange-600 justify-center rounded'>
                                <div>
                                    <Link to='/' onClick={signOutOnClick} className='flex place-items-center lg:inline-block lg:mt-0
                                    font-medium text-orange-600 hover:text-amber-100 text-base'>
                                        Sign Out
                                    </Link>
                                </div>
                            </Button>
                        }
                    </div>
                </div>
                ) : ( 
                <></>
            ) }
        </nav>
    )
}

export default Navbar