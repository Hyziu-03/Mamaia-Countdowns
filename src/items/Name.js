const name = window.innerWidth < 950 ? 'Mamaia' : 'Mamaia Countdowns';

const Name = () => <a href='index.html'><h1 className="name hover"><i className="far fa-calendar-alt icon"></i>&nbsp;{name}</h1></a>
export default Name;
