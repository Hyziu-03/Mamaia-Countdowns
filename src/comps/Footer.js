const Footer = () => {
    return (
        <footer className="footer">
            <p className="copyright" tabIndex='0'>This app has been created from scratch by Szymon Hyziak and therefore is upon copyright of the owner.</p>
            <section className="contact-links">
                <a href='https://www.linkedin.com/in/szymon-hyziak/' target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a>
                <a href='https://github.com/Hyziu-03/' target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
                <i className="fab fa-paypal" disabled></i>
            </section>
        </footer>
    )
}

export default Footer;
