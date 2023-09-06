// React
import { lazy, Suspense } from "react";

const Paragraph = lazy(() => import("components/interface/Paragraph"));

export default function AuthorSection() {
  return (
    <article className="article">
      <Suspense fallback={<div>Loading...</div>}>
        <Paragraph
          heading="Who is the author?"
          description={[
            "Hey there, I'm Szymon Hyziak, a 20-year-old geoinformatics student from Poland. I've been diving into website development for more than two years now, and I'm super excited to introduce you to my latest work!",
            "My IT background is tied to my high school education. On top of that, I have a strong interest in UI design and photography",
            "If you'd like to connect with me for work-related matters, feel free to reach out to me on LinkedIn. You'll find all the useful links right down below!",
          ]}
          className="biography" 
        />
      </Suspense>
      <img
        src="images/creator.webp"
        alt="Headshot of the creator - Szymon Hyziak."
        className="creator" 
      />
    </article>
  );
}
