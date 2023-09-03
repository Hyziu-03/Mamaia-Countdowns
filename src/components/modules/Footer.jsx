// Icons
import LinkedInIcon from "components/icons/LinkedInIcon";
import GitHubIcon from "components/icons/GitHubIcon";
import BuyMeCoffee from "components/icons/BuyMeCoffee";
import MailIcon from "components/icons/MailIcon";

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
                    <LinkedInIcon />
                    <span className="icon-name">LinkedIn</span>
                </a>
                <a
                    href="https://github.com/Hyziu-03/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="footer-icon"
                >
                    <GitHubIcon />
                    <span className="icon-name">GitHub</span>
                </a>
                <a href="mailto:szymonhyziak@student.agh.edu.pl"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="footer-icon"
                >
                    <MailIcon />
                    <span className="icon-name">Mail</span>
                </a>
                <a
                    href="https://www.buymeacoffee.com/szymonhyziak"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="footer-icon"
                >
                    <BuyMeCoffee />
                    <span className="icon-name">Buy me a coffee</span>
                </a>
            </section>
        </footer>
    );
}
