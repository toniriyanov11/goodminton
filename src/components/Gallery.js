import imgGallery from '../assets/image/gallery.jpg'

function Gallery() {

    return (
        <section id="gallery" className="p-4 py-12 text-left bg-white rounded-bl-[8rem] drop-shadow-lg">
            <p className="font-bold text-2xl flex items-center text-primary"><span className="h-1 bg-secondary inline-block mx-2 w-[30px]"></span>gallery.</p>
            <div className="mx-3 my-10 mb-[5rem] grid grid-cols-2 gap-y-8">
                <div className='mx-auto'><img src={imgGallery} alt="gallery"/></div>
                <div className='mx-auto'><img src={imgGallery} alt="gallery"/></div>
                <div className='mx-auto'><img src={imgGallery} alt="gallery"/></div>
                <div className='mx-auto'><img src={imgGallery} alt="gallery"/></div>
            </div>
        </section>
    )
}

export default Gallery