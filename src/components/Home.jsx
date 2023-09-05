import { lazy, Suspense } from "react";

const Header = lazy(() => import("components/modules/Header.jsx"));
const IntroductorySection = lazy(() => import(
    "components/modules/IntroductorySection")
);
const DescriptiveSection = lazy(() => import(
    "components/modules/DescriptiveSection")
);
const AuthorSection = lazy(() => import("components/modules/AuthorSection"));
const Footer = lazy(() => import("components/modules/Footer"));

export default function Home() {
    return (
        <div className="App" id="App">
            <Suspense fallback={<div>Loading...</div>}>
                <Header />
            </Suspense>
            <main className="main-content">
                <Suspense fallback={<div>Loading...</div>}>
                    <IntroductorySection />
                </Suspense>
                <Suspense fallback={<div>Loading...</div>}>
                    <DescriptiveSection />
                </Suspense>
                <Suspense fallback={<div>Loading...</div>}>
                    <AuthorSection />
                </Suspense>
            </main>
            <Suspense fallback={<div>Loading...</div>}>
                <Footer />
            </Suspense>
        </div>
    );
}
