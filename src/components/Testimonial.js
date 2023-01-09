import avatar from '../assets/image/avatar-testimonial.jpg'
import { RxArrowRight,RxArrowLeft } from 'react-icons/rx'
import CardTestimonial from './CardTestimonial';

function Testimonial() {
    return(
        <section id="testimonial" className="p-4 py-12 text-left">
            <p className="font-bold text-2xl flex items-center"><span className="h-1 bg-secondary inline-block mx-2 w-[30px]"></span>testimonial.</p>
            <div className="mx-auto w-4/5 my-10 text-black relative">
                <CardTestimonial image={avatar} quote=""/>
                <RxArrowLeft className='text-primary bg-secondary w-10 h-10 p-2 rounded-full absolute top-[40%] -left-8 drop-shadow-lg'/>
                <RxArrowRight className='text-primary bg-secondary w-10 h-10 p-2 rounded-full absolute top-[40%] -right-8 drop-shadow-lg'/>
            </div>
            <div className="text-center mx-auto w-3/4">
                <p className="my-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida velit id magnis sed nunc ultrices rhoncus, in pulvinar. Odio sagittis, neque, phasellus non at interdum. Suspendisse eget tristique nisi, risus.</p>
                <button className="px-10 py-3 bg-secondary text-primary text-sm font-semibold rounded-full">Join Us</button>
            </div>
        </section>
    )
}

export default Testimonial;