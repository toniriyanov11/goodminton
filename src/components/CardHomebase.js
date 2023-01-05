import { RiMapPinFill } from 'react-icons/ri'

function CardHomebase({title,address, link}){
    return(
        <div className="bg-primary text-white rounded-lg px-5 py-8 my-6 text-left">
            <div className='flex mb-8'>
                <RiMapPinFill className='text-secondary bg-[#67C395] p-1 h-8 w-8 rounded'/>
                <p className='mx-4 font-bold text-lg my-auto'>{title}</p>
            </div>
            <p className='my-8'>{address}</p>
            <button className="px-10 py-3 bg-white text-primary text-sm font-semibold rounded-full">buka map</button>
        </div>
    )
}

export default CardHomebase;