export default function Paragraph(props) {
  const { heading, description, className } = props;
  return (
    <article className={className}>
      <h2 className="heading" tabIndex="0">{heading}</h2>
      <p className="description" tabIndex="0">{description[0]}</p>
      <p className="description" tabIndex="0">{description[1]}</p>
      <p className="description" tabIndex="0">{description[2]}</p>
    </article>
  );
}
