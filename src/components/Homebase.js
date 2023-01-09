import CardHomebase from './CardHomebase';

function Homebase(){

    const homebases = [
        {
            title:'GOR PADANG',
            address:'Jl. Padang, No 12 , Padang, Sumatera Barat',
            link:''
        },
        {
            title:'GOR CILILITAN',
            address:'Jl. Jakarta, No 12 , Jakarta Selatan, DKI Jakarta',
            link:''
        },
    ]

    return (
        <section id="homebase" className="p-4 py-12 text-center text-primary bg-white opacity-90">
            <p className="font-bold text-2xl flex items-center"><span className="h-1 bg-secondary inline-block mx-2 w-[30px]"></span>homebase.</p>
            <p className="my-8 mx-auto w-3/4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida velit id magnis sed nunc ultrices rhoncus, in pulvinar. Odio sagittis, neque, phasellus non at interdum. Suspendisse eget tristique nisi, risus.</p>
            <div className="mx-auto w-4/5 mt-12 mb-[10rem]">
                {
                    homebases.map((homebase,index)=>{
                        return(
                            <CardHomebase key={index} title={homebase.title} address={homebase.address}/>
                        )
                    }) 
                }
            </div>
        </section>
    )
}

export default Homebase;