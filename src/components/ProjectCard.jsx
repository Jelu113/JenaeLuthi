export default function ProjectCard({headline, href, img}){
    return (
    <>
      <div className="direction">
        <p className="picHeadline">
         {headline}
        </p>

        <a
          href={href}
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={img}
            alt="Keyword"
            className="photo"
          ></img>
        </a>
        
      </div>
    
      </>
)};
