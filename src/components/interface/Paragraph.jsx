export default function Paragraph(props) {
  const { heading, description, className } = props;
  return (
    <article className={className}>
      <h1 className="heading" tabIndex="0">{heading}</h1>
      <p className="description" tabIndex="0">{description[0]}</p>
      <p className="description" tabIndex="0">{description[1]}</p>
      <p className="description" tabIndex="0">{description[2]}</p>
    </article>
  );
}
