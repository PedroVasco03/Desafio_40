import Card from "./components/cards/cards";
import Gallery from "./components/gallery/gallery";
import Newsletter from "./components/newsletter/newsletter";

function HomePage() {
    return(
        <div>
            <Newsletter/>
            <Gallery/>
            <Card/>
        </div>
    )
}

export default HomePage;