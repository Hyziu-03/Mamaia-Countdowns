import Introduction from "components/interface/Introduction.jsx";
import Calendar from "images/calendar.svg";

export default function IntroductorySection() {
  return (
    <article className="article">
      <Introduction
        heading="Can’t remember dates?"
        description="Mamaia Countdowns&trade; is a tool to ease your life. You can set countdowns for any event you want. No matter if it’s Christmas or an important exam to take!" />
      <img
        src={Calendar}
        alt="Illustration showing a young man holding a giant pencil. He is standing in front of a calendar and he is looking at the horizon."
        className="calendar" />
    </article>
  );
}
