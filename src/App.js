import Header from "./comps/Header";
import Introduction from "./comps/Introduction";
import Explanation from "./comps/Explanation";
import Biography from "./comps/Biography";
import Form from "./comps/Form";
import Footer from "./comps/Footer";

import Calendar from './img/calendar.svg';
import Work from './img/work.svg';
import Creator from './img/creator.webp';

import { integrateTabIndex } from "./libraries/mamaia";
integrateTabIndex();

function App() {
  return (
    <div className="App" id='App'>
      <Header />
      <main className='main-content'>
        <article className="article">
          <Introduction 
            heading="Can’t remember dates?"
            description="Mamaia Countdowns is a tool to ease your life. You can set countdowns for any event you want. No matter if it’s Christmas or an important exam to take!" 
          />
          <img src={Calendar} alt="" className="calendar" />
        </article>
        <article className="article">
            <Explanation
              heading="How to use it? "
              description={[ 'This tools’ purpose is to give you an option to create countdowns with ease. You can add a name to the event, set its’ date and a couple more options.'
              , 'These are for your convenience and to exaggerate that you can adjust times for notifications and another reminder so you won’t miss them. Never!'
              , 'All your countdowns will be stored in the memory of your device, so please don’t clear it for this app, as you might lose all your work.'
              ]} 
            />
          <img src={Work} alt="" className="work" />
        </article>
        <article className="article">
          <Biography 
            heading='Who is the creator?'
            description={[
              "Hello, I'm Szymon Hyziak - 18 years old high school student from Poland. I've been developing websites for over a year and I'm thrilled to show you another one.",
              "I've got a background in IT, that’s related to my high school. I also fancy UI Design and photography.",
              'If you want to contact me work-wise don’t hesitate to reach me through LinkedIn. Any donations via PayPal are welcome. Links below!'
            ]}
          />
          <img src={Creator} alt="" className="creator" />
        </article>
        <Form 
          heading='How can you help?'
          description={[
            'As it’s the first version of Mamaia Countdowns I still have many ideas and room for the app’s improvement.',
            'Do you have any feedback on your mind? Do you want to grab a call to discuss how this app works? Are you passionate about user testing software?',
            'If so, I encourage you to fill in this form. I’ll be pleased to get to know you and have an interesting conversation. See you there!'
          ]}
        /> 
      </main>
      <Footer />
    </div>
  );
}

export default App;
