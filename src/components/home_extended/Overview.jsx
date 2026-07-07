function Overview() {
    return (

        <section
            id="overview"
            className="
                min-h-screen
                bg-zinc-950
                text-white
                flex
                items-center
                text-center
                px-10
            "
        >

            <div
                className="
                    max-w-7xl
                    mx-auto
                    grid
                    md:grid-cols-2
                    gap-20
                    items-center
                "
            >

                <div>

                    <p
                        className="
                            tracking-[3px]
                            text-white
                            font-bold
                            text-2xl
                        "
                    >
                        OVERVIEW
                    </p>

                    <p
                        className="
                            text-neutral-200
                            leading-9
                            mt-10
                            text-lg
                        "
                    >
                        Hey there, welcome to my website! 
                        I am a software enthusiast with a passion for creating innovative solutions. 
                        Explore my projects, learn more about me, and feel free to reach out!
                    </p>

                </div>

                <div
                    className="
                        flex
                        justify-center
                    "
                >
                    <img
                        src="https://i.imgur.com/hLOeizR.png"
                        alt="Profile"
                        className="
                            w-80
                            rounded-3xl
                            shadow-2xl
                        "
                    />

                </div>

            </div>

        </section>

    )

}

export default Overview;