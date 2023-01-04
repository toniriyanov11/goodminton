import logo from '../assets/image/logo.svg'
import { RxHamburgerMenu, RxCross2 } from 'react-icons/rx'
import { useState } from 'react'

function Header () {
    const [hamburgerMenu, setHamburgerMenu] = useState(false)
    const hamburgerMenuVisibleClass = 'block bg-white fixed top-100 z-[20] h-screen w-full text-primary'
    const hamburgerMenuInvisibleClass = 'hidden'
    const hamburgerIconClass = 'text-2xl visible md:invisible text-black'

    const toggleHamburgerMenu = () => {
        setHamburgerMenu(!hamburgerMenu)
    }

    let hamburgerIcon ;
    if(!hamburgerMenu){
        hamburgerIcon = <RxHamburgerMenu onClick={toggleHamburgerMenu} className={hamburgerIconClass}/>
    }else{
        hamburgerIcon = <RxCross2 onClick={toggleHamburgerMenu} className={hamburgerIconClass}/>
    }

  

    return (
        <header className='bg-white fixed w-full z-10'>
            <div className='px-4 py-3 flex justify-between items-center'>
                <img src={logo} alt='logo'></img>
                {hamburgerIcon}
            </div>
            <div className={hamburgerMenu ? hamburgerMenuVisibleClass : hamburgerMenuInvisibleClass}>
                hamburger menu
            </div>
        </header>
    )
}

export default Header;