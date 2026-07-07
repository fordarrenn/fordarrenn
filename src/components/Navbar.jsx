import { useState, useEffect } from "react"
import { Link } from "react-router-dom"


function NavBar(){

    const [scrolled, setScrolled] = useState(false)
    const [open, setOpen] = useState(false)


    useEffect(() => {

        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }

        const handleKeyDown = (e) => {
            if(e.key === "Escape"){
                setOpen(false)
            }
        }

        window.addEventListener(
            "scroll",
            handleScroll
        )
        window.addEventListener(
            "keydown",
            handleKeyDown
        )

        return () => {
            window.removeEventListener(
                "scroll",
                handleScroll
            )
            window.removeEventListener(
                "keydown",
                handleKeyDown
            )
        }

    }, [])

    useEffect(() => {
        document.body.classList.toggle(
            "overflow-hidden",
            open
        );

        return () => {
            document.body.classList.remove("overflow-hidden");
        };

    }, [open]);

    const toggleMenu = () => {
        setOpen(prev => !prev)
    }


    const closeMenu = () => {
        setOpen(false)
    }


    return (

        <>

        <nav
        className={`
            fixed
            top-0
            left-0
            w-full
            z-50
            transition-all
            duration-500

            ${
                scrolled
                ?
                `
                bg-black/70
                backdrop-blur-md
                border-b
                border-neutral-800
                `
                :
                `
                bg-transparent
                `
            }
        `}
        >
            
            <div
            className="
                max-w-7xl
                mx-auto
                px-8
                py-3
                flex
                justify-between
                items-center
            "
            >


                <Link
                to="/"
                onClick={closeMenu}
                className="
                    absolute
                    left-1/2
                    -translate-x-1/2
                    text-xl
                    font-bold
                    tracking-[0.4em]
                    text-white
                "
                >
                    FORDARRENN
                </Link>



                <div></div>


                <button
                onClick={toggleMenu}
                className="
                    text-white
                    tracking-widest
                    text-sm
                    border
                    border-neutral-700
                    px-5
                    py-2
                    rounded-full
                    hover:border-white
                    transition
                "
                >
                    {open ? "✕" : "MENU"}
                </button>


            </div>

        </nav>

        <div
        className={`
            fixed
            inset-0
            z-40
            bg-black
            flex
            items-center
            justify-center
            transition-all
            duration-500
            text-sm

            ${
                open
                ?
                "opacity-100 visible"
                :
                "opacity-0 invisible"
            }

        `}
        >


            <div
            className="
                flex
                flex-col
                gap-8
                text-center
            "
            >

                <Link
                onClick={closeMenu}
                to="/"
                className="
                    font-bold
                    tracking-widest
                    hover:text-green-400
                    transition
                "
                >
                    HOME
                </Link>


                <Link
                onClick={closeMenu}
                to="/projects"
                className="
                    font-bold
                    tracking-widest
                    hover:text-yellow-400
                    transition
                "
                >
                    PROJECTS
                </Link>


                <Link
                onClick={closeMenu}
                to="/about"
                className="
                    font-bold
                    tracking-widest
                    hover:text-red-500
                    transition
                "
                >
                    ABOUT
                </Link>


                <Link
                onClick={closeMenu}
                to="/contact"
                className="
                    font-bold
                    tracking-widest
                    hover:text-blue-400
                    transition
                "
                >
                    CONTACT
                </Link>


            </div>


        </div>


        </>

    )

}


export default NavBar