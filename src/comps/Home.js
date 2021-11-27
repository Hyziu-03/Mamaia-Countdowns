// ? Components:

import Header from "./Header";
import Introduction from "./Introduction";
import Explanation from "./Explanation";
import Biography from "./Biography";
import Form from "./Form";
import Footer from "./Footer";

// ? Illustrations:

import Calendar from '../img/calendar.svg';
import Work from '../img/work.svg';
import Creator from '../img/creator.webp';

const Home = () => {
    return (
        <div className="App" id="App">

            <Header />
        
            <main className="main-content">
        
                <article className="article">
                    <Introduction
                        heading="Can’t remember dates?"
                        description="Mamaia Countdowns is a tool to ease your life. You can set countdowns for any event you want. No matter if it’s Christmas or an important exam to take!"
                    />
        
                    <img 
                        src={Calendar} 
                        alt="Illustration showing a young man holding a giant pencil. He is standing in front of a calendar and he is looking at the horizon." 
                        className="calendar"
                    />
        
                </article>
                
                <article className="article">

                    <Explanation
                        heading="How to use it? "
                        description={[
                            "This tools’ purpose is to give you an option to create countdowns with ease. You can add a name to the event, set its’ date and a couple more options.",
                            "These are for your convenience and to exaggerate that you can adjust times for notifications and another reminder so you won’t miss them. Never!",
                            "All your countdowns will be stored in the memory of your device, so please don’t clear it for this app, as you might lose all your work.",
                        ]}
                    />
                
                    <img
                        src={Work}
                        alt="Illustration showing a young man sitting at the desk. He is working on a laptop with coffee by side."
                        className="work"
                    />
                
                </article>

                <article className="article">
                
                    <Biography
                        heading="Who is the creator?"
                        description={[
                            "Hello, I'm Szymon Hyziak - 18 years old high school student from Poland. I've been developing websites for over a year and I'm thrilled to show you another one.",
                            "I've got a background in IT, that’s related to my high school. I also fancy UI Design and photography.",
                            "If you want to contact me work-wise don’t hesitate to reach me through LinkedIn. Any donations via PayPal are welcome. Links below!",
                        ]}
                    />
                
                    <img
                        src={Creator}
                        alt="Headshot of the creator - Szymon Hyziak."
                        className="creator"
                    />
                
                </article>
                
                <Form
                    heading="How can you help?"
                    description={[
                        "As it’s the first version of Mamaia Countdowns I still have many ideas and room for the app’s improvement.",
                        "Do you have any feedback on your mind? Do you want to grab a call to discuss how this app works? Are you passionate about user testing software?",
                        "If so, I encourage you to fill in this form. I’ll be pleased to get to know you and have an interesting conversation. See you there!",
                    ]}
                />
            
            </main>
            
            <Footer />
        
        </div>
    )
}

export default Home;

// ? Can we get rid of the <article> elements?
