import Work from "images/work.svg";
import Paragraph from "components/interface/Paragraph";

export default function DescriptiveSection() {
  return (
    <article className="article">
      <Paragraph
        heading="How to use it? "
        description={[
          "This tools’ purpose is to give you an option to create countdowns with ease. You can add a name to the event, set its’ date and a couple more options.",
          "These are for your convenience and to exaggerate that you can adjust times for notifications and another reminder so you won’t miss them. Never!",
          "All your countdowns will be stored in the memory of your device, so please don’t clear it for this app, as you might lose all your work.",
        ]}
        className="explanation" />
      <img
        src={Work}
        alt="Illustration showing a young man sitting at the desk. He is working on a laptop with coffee by side."
        className="work" />
    </article>
  );
}
