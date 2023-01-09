import logo from '../assets/image/logo.svg'
import logoWhite from '../assets/image/logo-white.svg'
import { RxHamburgerMenu, RxCross2 } from 'react-icons/rx'
import { useState,useEffect } from 'react'

function Header () {
    const [hamburgerMenu, setHamburgerMenu] = useState(false)
    const [headerClass, setHeaderClass] = useState('bg-white fixed w-full z-10')
    const hamburgerMenuVisibleClass = 'block bg-primary fixed top-0 z-[30] h-screen w-full text-primary overscroll-none' 
    const hamburgerMenuInvisibleClass = 'hidden'
    const hamburgerIconClassHidden = 'text-2xl visible md:invisible text-black'
    const hamburgerIconClassShow = 'text-2xl visible md:invisible text-white'

    const toggleHamburgerMenu = () => {
        setHamburgerMenu(!hamburgerMenu)
    }

    const handleScroll = () => {
       let scrollValue = window.pageYOffset 
       if(scrollValue > 0){
            setHeaderClass('bg-white fixed w-full z-10 drop-shadow-md')
       }else{
            setHeaderClass('bg-white fixed w-full z-10')
       }
    }


    useEffect(()=>{
        window.onscroll = () => handleScroll()
    },[headerClass])


    let hamburgerIcon ;
    if(!hamburgerMenu){
        hamburgerIcon = <RxHamburgerMenu onClick={toggleHamburgerMenu} className={hamburgerIconClassHidden}/>
    }else{
        hamburgerIcon = <RxCross2 onClick={toggleHamburgerMenu} className={hamburgerIconClassShow}/>
    }



    return (
        <header className={headerClass}>
            <div className='px-4 py-3 flex justify-between items-center'>
                <img src={logo} alt='logo'></img>
                {hamburgerIcon}
            </div>
            <div className={hamburgerMenu ? hamburgerMenuVisibleClass : hamburgerMenuInvisibleClass}>
                <div className='px-4 py-3 flex justify-between items-center'>
                    <img src={logoWhite} alt='logo'></img>
                    {hamburgerIcon}
                </div>
                <div className='font-medium text-left flex flex-col text-2xl mt-8 text-white'>
                    <p className='p-2 ml-4 my-2 mt-'><a href="#about-us">About Us</a></p>
                    <p className='p-2 ml-4 my-2'><a href="#gallery">Gallery</a></p>
                    <p className='p-2 ml-4 my-2'><a href="#testimonial">Testimonial</a></p>
                    <p className='p-2 ml-4 my-2'><a href="#homebase">Homebase</a></p>
                </div>
            </div>
        </header>
    )
}

export default Header;