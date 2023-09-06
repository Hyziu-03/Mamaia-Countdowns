// React
import { lazy, Suspense } from "react";

const Introduction = lazy(() => import("components/interface/Introduction"));

export default function IntroductorySection() {
  return (
    <article className="article">
      <Suspense fallback={<div>Loading...</div>}>
        <Introduction
          heading="Can’t remember dates?"
          description="Mamaia Countdowns&trade; makes life easier. You can create countdowns for any event you want, like Christmas or an important exam!" 
        />
      </Suspense>
      <img
        src="images/calendar.svg"
        alt="Illustration showing a young man holding a giant pencil. He is standing in front of a calendar and he is looking at the horizon."
        className="calendar" />
    </article>
  );
}
