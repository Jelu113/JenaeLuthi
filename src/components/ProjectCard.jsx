export default function ProjectCard({
  headline,
  href,
  img,
  description,
  github,
}) {
  return (
    <>
    <br />
      <div className="direction">
        <p className="picHeadline">{headline}</p>

        <a href={href} target="_blank" rel="noreferrer">
          <img src={img} className="photo"></img>        
        </a>
        <a href={github} target="_blank" rel="noreferrer">
          <p className="github">{github}</p>
        </a>
        <p className="picdescription">{description}</p>
      </div>
      <br />
   
    </>
  );
}
