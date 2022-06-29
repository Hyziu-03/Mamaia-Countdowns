import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import IntroductorySection from "./IntroductorySection.jsx";
import DescriptiveSection from "./DescriptiveSection.jsx";
import AuthorSection from "./AuthorSection.jsx";

const Home = () => {
    return (
        <div className="App" id="App">
            <Header />
            <main className="main-content">
                <IntroductorySection />
                <DescriptiveSection />
                <AuthorSection />
            </main>
            <Footer />
        </div>
    );
}

export default Home;
