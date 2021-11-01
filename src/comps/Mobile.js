import Name from "../items/Name";
import Contact from "../items/Contact";
import Button from "../items/Button";

const Mobile = () => {
    return (
        <div className="mobile-container">
            <header className="fixed-header"><Name /></header>
            <main className="mobile-content">
                <article className="form-container">
                    <Contact 
                        firstInput = 'What is this event?'
                        secondInput = 'When does it start?'
                        thirdInput = 'What additional information do you have?'
                    />
                    <Button message="Add an Event!" />
                </article>
                <article className="saved-countdowns">
                    <h1 className="heading">Christmas 2021</h1>
                    <p className="description">This event starts on 24th December 2021.</p>
                    <p className="description">Duis auctor nunc sed tellus facilisis suscipit. In eu placerat sapien. Sed porttitor elit a tellus euismod, vel ornare dolor euismod.</p>
                    <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae nibh eros. Nam lobortis scelerisque turpis ultrices pellentesque. Quisque convallis nec mi in luctus.</p>
                    <section className="btn-container">
                        <button className="arrow-btn"><i className="fas fa-long-arrow-alt-left"></i></button>
                        <button className="arrow-btn"><i className="fas fa-long-arrow-alt-right"></i></button>
                    </section>
                </article>
            </main>
        </div>
    )
}

export default Mobile; 
