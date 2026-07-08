import Headline from "../components/home_extended/Headline"
import Overview from "../components/home_extended/Overview"
import Highlights from "../components/home_extended/Highlights"
import Bottomtext from "../components/home_extended/Bottomtext"

function Home() {
    return(
        <>
            <Headline />
            <Highlights />
            <Overview />
            <Bottomtext />
        </>
    )
}

export default Home