import Header from './Header.jsx';
import Introduction from './Introduction.jsx';
import Footer from './Footer.jsx';
import Calendar from '../images/calendar.svg';
import Work from '../images/work.svg';
import Creator from '../images/creator.webp';
import Paragraph from './Paragraph';

const Home = () => {
    return (
        <div className='App' id='App'>
            <Header />
            <main className='main-content'>
                <article className='article'>
                    <Introduction
                        heading='Can’t remember dates?'
                        description='Mamaia Countdowns&trade; is a tool to ease your life. You can set countdowns for any event you want. No matter if it’s Christmas or an important exam to take!'
                    />
                    <img 
                        src={Calendar} 
                        alt='Illustration showing a young man holding a giant pencil. He is standing in front of a calendar and he is looking at the horizon.' 
                        className='calendar'
                    />
                </article>
                <article className='article'>
                    <Paragraph
                        heading='How to use it? '
                        description={[
                            'This tools’ purpose is to give you an option to create countdowns with ease. You can add a name to the event, set its’ date and a couple more options.',
                            'These are for your convenience and to exaggerate that you can adjust times for notifications and another reminder so you won’t miss them. Never!',
                            'All your countdowns will be stored in the memory of your device, so please don’t clear it for this app, as you might lose all your work.',
                        ]}
                        className='explanation'
                    />
                    <img
                        src={Work}
                        alt='Illustration showing a young man sitting at the desk. He is working on a laptop with coffee by side.'
                        className='work'
                    />
                </article>
                <article className='article'>
                    <Paragraph
                        heading='Who is the creator?'
                        description={[
                            "Hello, I'm Szymon Hyziak - 18 years old high school student from Poland. I've been developing websites for over a year and I'm thrilled to show you another one",
                            "I've got a background in IT, that’s related to my high school. I also fancy UI Design and photography.",
                            'If you want to contact me work-wise don’t hesitate to reach me through LinkedIn. Links below!',
                        ]}
                        className='biography'
                    />
                    <img
                        src={Creator}
                        alt='Headshot of the creator - Szymon Hyziak.'
                        className='creator'
                    />
                </article>
            </main>
            <Footer />
        </div>
    );
}

export default Home;
