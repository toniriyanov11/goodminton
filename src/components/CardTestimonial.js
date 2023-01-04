

function CardTestimonial ({image,quote}) {
    
    return (
        <div className="bg-white rounded-xl mb-12 min-h-[180px] flex flex-col justify-center py-8 px-4">
            <p className="mb-6 italic">"Goodminton adalah , consectetur adipiscing elit. Gravida velit id magnis sed nunc ultrices rhoncus, in pulvinar."</p>
            <div className="flex">
                <img src={image} alt="avatar"/>
                <div className='mx-4 text-[0.8rem] my-auto'>
                    <p className="font-bold">Ahmad Saugi</p>
                    <p>Mahasiswa</p>
                </div>
            </div>
        </div>
    )
}

export default CardTestimonial;