import logo from '../assets/image/logo.svg'

function Footer(){

    return(
        <footer className="bg-white rounded-tr-[8rem] px-6 py-14 text-left -mt-[8rem] text-black relative z-4 drop-shadow-xl">
            <img src={logo} alt='logo'></img>
            <p className='my-12 w-4/5'>
                Komunitas bermain badminton tanpa perlu pusing booking lapangan dan shuttlecock. Cukup persiapkan raket kamu dan mari bersenang-senang.
            </p>
            <div className='flex flex-row my-12 leading-[2.8rem]'>
                <div>
                    <p className='font-semibold text-sm'>COMMUNTIY</p>
                    <p>About Us</p>
                    <p>Gallery</p>
                    <p>Testimonial</p>
                </div>
                <div className='mx-9'>
                    <p className='font-semibold text-sm'>GET IN TOUCH</p>
                    <p>Instagram</p>
                </div>
            </div>
            <div>
                COPYRIGHT © 2023 — <b>riyanov</b>studio.
            </div>
        </footer>
    )

}

export default Footer;