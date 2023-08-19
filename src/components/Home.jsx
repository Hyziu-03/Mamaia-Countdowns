// Components
import Header from "components/modules/Header.jsx";
import IntroductorySection from "components/modules/IntroductorySection";
import DescriptiveSection from "components/modules/DescriptiveSection";
import AuthorSection from "components/modules/AuthorSection";
import Footer from "components/modules/Footer";

export default function Home() {
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
