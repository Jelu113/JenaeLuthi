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
          <p className="picDescription">{description}</p>
          <img src={img} alt={headline} className="photo"></img>
        </div>
        <div>
          <a href={github} target="_blank" rel="noreferrer">
            <i className="fa-brands fa-github fa-xl"></i>
          </a>&nbsp;&nbsp;
          <a href={href} target="_blank" rel="noreferrer">
            <i className="fa-solid fa-link fa-xl"></i>
          </a>
        </div>
        
      </div>
    </>
  );
}
