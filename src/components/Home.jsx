import Header from "components/Header.jsx";
import Footer from "components/Footer.jsx";
import IntroductorySection from "components/IntroductorySection.jsx";
import DescriptiveSection from "components/DescriptiveSection.jsx";
import AuthorSection from "components/AuthorSection.jsx";

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
