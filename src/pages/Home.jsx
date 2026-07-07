function Home(){
    return (
        <section
            id="home"
            className="
                min-h-screen
                px-6
                flex 
                items-center 
                justify-center
        ">
            <div className="
                text-center
            ">
                
                <h1 className="
                    text-5xl
                    font-bold
                    text-white
                    tracking-light
                ">
                    Darren
                </h1>
                <p className="
                    text-green-400
                    text-sm
                    tracking-[0.5em]
                ">
                    Software Developer and Enthusiast
                </p>
                <p className="
                    text-neutral-400
                    mt-4
                ">
                    Hey there, welcome to my website! I am a software enthusiast with a passion for creating innovative solutions. Explore my projects, learn more about me, and feel free to reach out!
                </p>
            </div>

        </section>
    )
}

export default Home;