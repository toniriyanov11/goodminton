import logo from '../assets/image/logo.svg'

function Footer(){

    const date = new Date();
    const year = date.getFullYear()
    console.log(year)

    return(
        <footer className="bg-white rounded-tr-[8rem] px-6 pt-14 pb-10 text-left -mt-[8rem] text-black relative z-4 drop-shadow-xl">
            <img src={logo} alt='logo'></img>
            <p className='mb-12 mt-8 w-4/5'>
                Komunitas bermain badminton tanpa perlu pusing booking lapangan dan shuttlecock. Cukup persiapkan raket kamu dan mari bersenang-senang.
            </p>
            <div className='flex flex-row my-12 leading-[2.8rem]'>
                <div className='flex flex-col'>
                    <p className='font-semibold text-sm mb-4'>Community</p>
                    <a href='#about-us'>About Us</a>
                    <a href='#gallery'>Gallery</a>
                    <a href='#testimonial'>Testimonial</a>
                </div>
                <div className='mx-9'>
                    <p className='font-semibold text-sm mb-4'>Get In Touch</p>
                    <p>Instagram</p>
                </div>
            </div>
            <div>
                <p className='text-sm'>Copyright © {year} — <a href='http://riyanovstudio.com'><strong>riyanov</strong>studio.</a></p>
            </div>
        </footer>
    )

}

export default Footer;