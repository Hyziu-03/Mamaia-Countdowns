import Header from "components/Header.jsx";
import IntroductorySection from "components/IntroductorySection";
import DescriptiveSection from "components/DescriptiveSection";
import AuthorSection from "components/AuthorSection";
import Footer from "components/Footer";

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
