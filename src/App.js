import Header from "./comps/Header";
import Introduction from "./comps/Introduction";
import Explanation from "./comps/Explanation";

import Calendar from './img/calendar.svg';
import Work from './img/work.svg';

function App() {
  return (
    <div className="App">
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
            <Explanation heading="How to use it? "
              description={[ 'This tools’ purpose is to give you an option to create countdowns with ease. You can add a name to the event, set its’ date and a couple more options.'
              , 'These are for your convenience and to exaggerate that you can adjust times for notifications and another reminder so you won’t miss them. Never!'
              , 'All your countdowns will be stored in the memory of your device, so please don’t clear it for this app, as you might lose all your work.'
              ]} 
            />
          <img src={Work} alt="" className="work" />
        </article>
      </main>
    </div>
  );
}

export default App;
