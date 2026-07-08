import { useState, useEffect } from "react";

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
    
    const [current, setCurrent] = useState(0);
    const [touchStart, setTouchStart] = useState(null);
    
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 10000);
    
        return () => clearInterval(timer);
    }, [slides.length]);

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const handleTouchStart = (e) => {
        setTouchStart(e.touches[0].clientX);
    };

    const handleTouchEnd = (e) => {
        if (touchStart === null) return;

        const touchEnd = e.changedTouches[0].clientX;
        const distance = touchStart - touchEnd;

        if (distance > 50) {
            nextSlide();
        } else if (distance < -50) {
            prevSlide();
        }

        setTouchStart(null);
    };

    return (

        <section
            className="
                relative
                h-screen
                overflow-hidden
            "
        >

            <div
                className="absolute inset-0"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
            >
                {slides.map((slide, index) => (
                    <img
                        key={slide.id}
                        src={slide.image}
                        alt="Any"
                        className={`
                            absolute 
                            inset-0 
                            w-full 
                            h-full 
                            object-cover 
                            transition-opacity 
                            duration-700 
                            ease-in-out 
                            ${
                                index === current ? "opacity-100" : "opacity-0"
                            }
                        `}
                    />
                ))}
            </div>

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