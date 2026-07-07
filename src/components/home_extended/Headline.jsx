function Headline() {

    return (

        <section
            className="
                relative
                h-screen
                overflow-hidden
            "
        >

            <img
                src="https://i.imgur.com/hLOeizR.png"
                alt="Any"
                className="
                    absolute
                    inset-0
                    w-full
                    h-full
                    object-cover
                "
            />

            <div
                className="
                    absolute
                    inset-0
                    bg-black/60
                "
            />

            <div
                className="
                    pt-30
                    absolute
                    inset-0
                    flex
                    flex-col
                    justify-center
                    z-10
                    px-9
                "
            >

                <h3
                    id="welcome"
                    className="
                        text-6xl
                        font-bold
                        tracking-tight
                        mt-6
                    "
                >
                    Welcome
                </h3>

            </div>

        </section>

    )

}

export default Headline