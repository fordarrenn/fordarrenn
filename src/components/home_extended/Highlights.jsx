import { useState, useEffect } from "react"

import lab from "../../assets/images/lab2.jpeg"
import buddy from "../../assets/images/buddy11.jpeg"
import dartflix from "../../assets/images/dartflix_presentation_preview.PNG"

function Highlights() {

    const slides = [
        {
            image: lab,
            title: "Laboratory Helper",
            desc: "Serving as laboratory helper."
        },
        {
            image: buddy,
            title: "Student Buddy",
            desc: "Serving and Guiding international student as Student Buddy"
        },
        {
            image: dartflix,
            title: "Team Project",
            desc: "Dartflix Streaming project!"
        }
    ];

    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 7000);

        return () => clearTimeout(timer);
    }, [current]);

    const nextSlide = () => {
        setCurrent((current + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrent((current - 1 + slides.length) % slides.length);
    };

    return (

        <section
            className="
                min-h-screen
                bg-black
                text-white
                flex
                items-center
                justify-center
                px-8
                py-10
            "
        >

            <div className="max-w-6xl w-full">

                <h2
                    className="
                        text-2xl
                        font-bold
                        text-center
                        tracking-[3px]
                    "
                >
                    HIGHLIGHTS
                </h2>

                <div className="
                    relative
                    py-10
                ">

                    <img
                        src={slides[current].image}
                        alt={slides[current].title}
                        className="
                            w-full
                            h-100
                            object-cover
                            rounded-3xl
                            transition-opacity 
                            duration-700 
                            ease-in-out
                        "
                    />

                    <div
                        className="
                            absolute
                            inset-0
                            bg-black/50
                            rounded-3xl
                        "
                    />

                    <div
                        className="
                            absolute
                            bottom-12
                            left-12
                            z-10
                        "
                    >

                        <h3 className="text-4xl font-bold">
                            {slides[current].title}
                        </h3>

                        <p className="mt-4 text-lg max-w-xl text-gray-200">
                            {slides[current].desc}
                        </p>

                    </div>

                    <button
                        onClick={prevSlide}
                        className="
                            absolute
                            left-5
                            top-1/2
                            -translate-y-1/2
                            bg-white/20
                            hover:bg-white/40
                            px-4
                            py-3
                            rounded-full
                            text-2xl
                        "
                    >
                        ❮
                    </button>

                    <button
                        onClick={nextSlide}
                        className="
                            absolute
                            right-5
                            top-1/2
                            -translate-y-1/2
                            bg-white/20
                            hover:bg-white/40
                            px-4
                            py-3
                            rounded-full
                            text-2xl
                        "
                    >
                        ❯
                    </button>

                </div>

                <div
                    className="
                        flex
                        justify-center
                        gap-3
                        mt-8
                    "
                >
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrent(index)}
                            className={`
                                w-4
                                h-4
                                rounded-full
                                transition-all
                                ${
                                    current === index
                                        ? "bg-red-500"
                                        : "bg-gray-500"
                                }
                            `}
                        />
                    ))}
                </div>

            </div>

        </section>

    );
}

export default Highlights;