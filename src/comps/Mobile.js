import Name from "../items/Name";
import Contact from "../items/Contact";
import Button from "../items/Button";

import { refresh } from '../libraries/mamaia';

const Mobile = () => {
    let dateContent = document.getElementsByClassName('email')[1].value !== undefined ? document.getElementsByClassName('email')[1].value : 'Your date will show up here when you submit it.';

    return (
        <div className="mobile-container">
            <header className="fixed-header" onClick={refresh}><Name /></header>
            <main className="mobile-content">
                <article className="contact-form-container">
                    <Contact 
                        firstInput='What is this event?'
                        secondInput='When does it start?'
                        secondInputType = 'date'
                        thirdInput='What additional information do you have?'
                    />
                    <span>
                        <Button message="Set a Countdown!" />
                    </span>
                </article>
                <article className="saved-countdowns">
                    <h1 className="heading"></h1>
                    <p className="description"></p>
                    <p className="description"></p>
                    <section className="btn-container">
                        <button className="arrow-btn">
                            <i className="fas fa-long-arrow-alt-left"></i>
                        </button>
                        <button className="arrow-btn">
                            <i className="fas fa-long-arrow-alt-right"></i>
                        </button>
                    </section>
                </article>
            </main>
        </div>
    )
}

export default Mobile; 
