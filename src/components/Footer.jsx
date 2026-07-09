import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";

function Footer() {

    return (

        <footer
            className="
                bg-zinc-950
                text-white
                border-t
                border-zinc-800
            "
        >

            <div
                className="
                    max-w-7xl
                    mx-auto
                    px-8
                    py-16
                "
            >

                <div
                    className="
                        flex
                        flex-col
                        items-center
                        text-center
                    "
                >

                    <p
                        className="
                            text-neutral-100
                            mt-5
                            max-w-xl
                            leading-8
                        "
                    >
                        Made with hope and passion. Make sure to stay connected!
                    </p>

                    <div
                        className="
                            flex
                            gap-8
                            text-3xl
                            mt-10
                        "
                    >

                        <a
                            href="https://github.com/fordarrenn"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                                hover:text-blue-300
                                transition
                            "
                        >
                            <FaGithub />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/darren-darren/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                                hover:text-blue-300
                                transition
                            "
                        >
                            <FaLinkedin />
                        </a>

                        <a
                            href="https://instagram.com/fordarrenn"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                                hover:text-blue-300
                                transition
                            "
                        >
                            <FaInstagram />
                        </a>

                        <a
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=fordarrenn@gmail.com"
                            className="
                                hover:text-blue-300
                                transition
                            "
                        >
                            <FaEnvelope />
                        </a>

                    </div>

                </div>

                <div
                    className="
                        border-t
                        border-zinc-800
                        mt-14
                        pt-8
                        text-center
                        text-zinc-500
                        text-sm
                    "
                >
                    © 2026 Darren. All Rights Reserved.
                </div>

            </div>

        </footer>

    );

}

export default Footer;