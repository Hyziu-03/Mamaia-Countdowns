import Creator from '../images/creator.webp';
import Paragraph from './Paragraph';

const AuthorSection = () => {
  return (
      <article className='article'>
          <Paragraph heading='Who is the creator?' description={[
                "Hello, I'm Szymon Hyziak - 19 years high school graduate from Poland. I've been developing websites for over a year and I'm thrilled to show you another one",
                "I've got a background in IT, that’s related to my high school. I also fancy UI Design and photography.",
                'If you want to contact me work-wise don’t hesitate to reach me through LinkedIn. All the useful links are below!',
            ]} className='biography' />
          <img src={Creator} alt='Headshot of the creator - Szymon Hyziak.' className='creator' />
      </article>
  );
}

export default AuthorSection;
