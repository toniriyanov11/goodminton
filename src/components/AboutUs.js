import CardAboutUs from "./CardAboutUs"
import iconJoystick from "../assets/image/icon-card-joystick.svg"
import iconPeople from "../assets/image/icon-card-people.svg"
import iconRacket from "../assets/image/icon-card-racket.svg"

function AboutUs () {

    const cardContent = [
        {
            image: iconRacket,
            title:'Badminton Community',
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida velit id magnis sed nunc ultrices rhoncus, in pulvinar.'
        },
        {
            image: iconPeople,
            title:'Open for public',
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida velit id magnis sed nunc ultrices rhoncus, in pulvinar.'
        },
        {
            image: iconJoystick,
            title:'Play with joy',
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida velit id magnis sed nunc ultrices rhoncus, in pulvinar.'
        }
    ]

    return (
        <section id="about-us" className="p-4 pt-12 text-left">
            <p className="font-bold text-2xl flex items-center"><span class="h-1 bg-secondary inline-block mx-2 w-[30px]"></span>About Us</p>
            <p className="my-8 w-3/4">Sekelompok pemuda yang mulai membuncit memulai olahraga kembali dengan teman satu jurusan pada 30 Januari 2022. Namun karena banyaknya teman-teman yang mempunyai hasrat untuk rutin bermain badminton dan kesusahan mencari teman main, maka dari itu Goodminton menjadi komunitas publik untuk siapa saja yang ingin bermain badminton.</p>
            <div className="mx-3 flex flex-col">   
                {
                    cardContent.map((card)=>{
                        return(
                            <CardAboutUs image={card.image} titile={card.title} description={card.description}/>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default AboutUs