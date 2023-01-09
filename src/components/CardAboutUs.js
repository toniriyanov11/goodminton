

function CardAboutUs ({image, title, description}) {
    
    return (
        <div className="my-6 mx-6">
            <div className="bg-white rounded-xl mb-4 h-[180px] flex justify-center p-4">
                <img src={image} alt={title} loading="lazy"/>
            </div>
            <div className="text-center">
                <p className="font-semibold mb-2 text-lg">{title}</p>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default CardAboutUs;