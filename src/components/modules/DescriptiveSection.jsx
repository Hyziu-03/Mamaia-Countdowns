// Images
import Work from "images/work.svg";
// Components
import Paragraph from "components/interface/Paragraph";

export default function DescriptiveSection() {
  return (
    <article className="article">
      <Paragraph
        heading="How to use it? "
        description={[
          "The goal of this tool is to let you easily make countdowns. You can name the event, pick a date, and choose a few other things too.",
          "These options are there to help you. You can set times for notifications and extra reminders, so you won't ever miss those events.",
          "All your countdowns are stored in the cloud now. So, no need to stress about losing your work – just log in with your Google account!",
        ]}
        className="explanation" />
      <img
        src={Work}
        alt="Illustration showing a young man sitting at the desk. He is working on a laptop with coffee by side."
        className="work" />
    </article>
  );
}
