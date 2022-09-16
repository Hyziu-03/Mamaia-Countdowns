import Header from "components/sections/Header.jsx";
import IntroductorySection from "components/sections/IntroductorySection";
import DescriptiveSection from "components/sections/DescriptiveSection";
import AuthorSection from "components/sections/AuthorSection";
import Footer from "components/sections/Footer";

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
};

export default Home;
