import LinkedInIcon from "./icons/LinkedInIcon";
import GitHubIcon from "./icons/GitHubIcon"; 

const Footer = () => {
    return (
        <footer className="footer">
            <p className="copyright" tabIndex="0">This app has been created from scratch by Szymon Hyziak and therefore is upon copyright of its" owner.</p>
            <section className="contact-links">
                <a href="https://www.linkedin.com/in/szymon-hyziak/" target="_blank" rel="noreferrer noopener"><LinkedInIcon /></a>
                <a href="https://github.com/Hyziu-03/" target="_blank" rel="noreferrer noopener"><GitHubIcon /></a>
            </section>
        </footer>
    );
}

export default Footer;
