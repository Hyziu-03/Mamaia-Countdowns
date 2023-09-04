// React
import { lazy, Suspense } from "react";

const LinkedInIcon = lazy(() => import("components/icons/LinkedInIcon"));
const GitHubIcon = lazy(() => import("components/icons/GitHubIcon"));
const BuyMeCoffee = lazy(() => import("components/icons/BuyMeCoffee"));
const MailIcon = lazy(() => import("components/icons/MailIcon"));

export default function Footer() {
    return (
        <footer className="footer">
            <p className="copyright" tabIndex="0">
                This app has been created from scratch by Szymon Hyziak and therefore is
                upon copyright of its' owner. <a 
                    href="https://storyset.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    Illustrations by Rafiki from Storyset
                </a>
            </p>
            <section className="contact-links">
                <a
                    href="https://www.linkedin.com/in/szymon-hyziak/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="footer-icon"
                >
                    <Suspense fallback={<div>Loading...</div>}>
                        <LinkedInIcon />
                    </Suspense>
                    <span className="icon-name">LinkedIn</span>
                </a>
                <a
                    href="https://github.com/Hyziu-03/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="footer-icon"
                >
                    <Suspense fallback={<div>Loading...</div>}>
                        <GitHubIcon />
                    </Suspense>
                    <span className="icon-name">GitHub</span>
                </a>
                <a href="mailto:szymonhyziak@student.agh.edu.pl"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="footer-icon"
                >
                    <Suspense fallback={<div>Loading...</div>}>
                        <MailIcon />
                    </Suspense>
                    <span className="icon-name">Mail</span>
                </a>
                <a
                    href="https://www.buymeacoffee.com/szymonhyziak"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="footer-icon"
                >
                    <Suspense fallback={<div>Loading...</div>}>
                        <BuyMeCoffee />
                    </Suspense>
                    <span className="icon-name">Buy me a coffee</span>
                </a>
            </section>
        </footer>
    );
}
