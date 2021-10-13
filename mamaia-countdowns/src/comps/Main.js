import Button from "../items/Button";
import Calendar from "../img/calendar.svg";
import TextSection from "./TextSection";

const Main = () => {
    return (
        <main>
            <article className="article">
                <section className="introduction">
                    <TextSection
                        heading="Can’t remember dates?"
                        description="Mamaia Countdowns is a tool to ease your life. You can set countdowns for any event you want. No matter if it’s Christmas or an important exam to take! "
                    />
                    <Button />
                </section>
                
                <img src={Calendar} alt="" className="calendar" />
            </article>
        </main>
    )
}

export default Main;
