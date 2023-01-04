function Hero() {
    return(
        <section id="hero" className="p-4 py-12 pt-[100px] text-left bg-white rounded-br-[8rem] relative z-[1] drop-shadow-lg">
            <div className="w-4/5">
                <p className="text-primary text-3xl font-bold leading-10">Komunitas bermain badminton tanpa perlu pusing booking lapangan dan shuttlecock. Cukup persiapkan raket kamu dan mari bersenang-senang. </p>
                <p className="mt-6 text-gray-500">Pengen main badminton tapi susah nyari teman main atau sudah punya teman main tapi susah mencari lapangan? Goodminton solusinya, kita akan bermain dan bersenang bersama sama.</p>
            </div>
            <button className="mt-8 px-10 py-3 bg-secondary text-primary text-sm font-semibold rounded-full">Join Us</button>
        </section>
    )
}

export default Hero;