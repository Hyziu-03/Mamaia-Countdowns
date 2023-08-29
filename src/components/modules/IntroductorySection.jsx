// Components
import Introduction from "components/interface/Introduction.jsx";
// Images
import Calendar from "images/calendar.svg";

export default function IntroductorySection() {
  return (
    <article className="article">
      <Introduction
        heading="Can’t remember dates?"
        description="Mamaia Countdowns&trade; makes life easier. You can create countdowns for any event you want, like Christmas or an important exam!" />
      <img
        src={Calendar}
        alt="Illustration showing a young man holding a giant pencil. He is standing in front of a calendar and he is looking at the horizon."
        className="calendar" />
    </article>
  );
}
