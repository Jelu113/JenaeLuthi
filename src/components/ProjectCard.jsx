export default function ProjectCard({
  headline,
  href,
  img,
  description,
  github,
}) {
  return (
    <>
      <div className="projectCard">
        <div className="projectContent">
          <p className="picHeadline">{headline}</p>

          <a href={href} target="_blank" rel="noreferrer">
            <img src={img} alt={headline} className="photo"></img>
          </a>
          <a href={github} target="_blank" rel="noreferrer">
            <p className="github">{github}</p>
          </a>
        </div>
        <p className="picDescription">{description}</p>
      </div>
    </>
  );
}
