// HELPER LIBS
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import Fade from "embla-carousel-fade"
import { useRef } from "react"

import headerpic1 from "../../assets/images/header.png"
import headerpic2 from "../../assets/images/header2.jpeg"
import headerpic3 from "../../assets/images/header3.jpeg"
import headerpic4 from "../../assets/images/header4.jpeg"
// import headerpic5 from "../../assets/images/header5.jpeg"

function Headline() {
    const slides = [
            {
                id: 1,
                image: headerpic1
            },
            {
                id: 2,
                image: headerpic2
            },
            {
                id: 3,
                image: headerpic3
            },
            {
                id: 4,
                image: headerpic4
            }
        ];

    const autoplay = useRef(
        Autoplay({
            delay: 7000,
            stopOnInteraction: false,
            stopOnMouseEnter: false,
        })
    );

    const [emblaRef] = useEmblaCarousel(
        {
            loop: true
        },
        [
            Fade(),
            autoplay.current
        ]
    );

    return (

        <section
            className="
                relative
                h-screen
                overflow-hidden
            "
        >

            <div
                className="
                    absolute 
                    inset-0
                    overflow-hidden
                "
                ref={emblaRef}
            >
                <div
                    className="
                        flex
                        h-full
                ">
                    {slides.map((slide) => (
                        <div
                            key={slide.id}
                            className="
                            flex-[0_0_100%]
                            h-full
                        ">
                            <img 
                                src={slide.image}
                                alt="Any"
                                draggable={false}
                                className="
                                    w-full
                                    h-full
                                    object-cover
                                    select-none
                                    transition-opacity 
                                    duration-700 
                                    ease-in-out
                                "
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div
                className="
                    absolute
                    inset-0
                    bg-black/60
                    pointer-events-none
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
                    pointer-events-none
                "
            >

                <h3
                    id="welcome"
                    className="
                        text-3xl
                        tracking-tight
                        mt-6
                        text-neutral-200
                    "
                >
                    Welcome to
                </h3>

                <h2
                    className="
                        glitch
                        text-6xl
                        font-bold
                        tracking-tight
                        pointer-events-auto
                    "
                    data-text="FORDARRENN"
                >
                   FORDARRENN
                </h2>

                <p
                    className="
                        text-lg
                        font-mono
                        text-neutral-400
                        tracking-tight
                    "
                >
                   Personal Website
                </p>

            </div>

        </section>

    )

}

export default Headline