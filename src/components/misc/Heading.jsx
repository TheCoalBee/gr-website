function Heading({title, content}) {
  return (
    <section className="heading">
        <h1>{title}</h1>
        <p>{content}</p>
    </section>
  );
}

export default Heading;