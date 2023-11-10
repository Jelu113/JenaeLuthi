import ProjectCard from '../components/ProjectCard'
import ProjectList from '../components/ProjectList'
export default function Portfolio() {
const projectsArray =[
  {
    id: 1,
    title: "Real Estate Keywords",
    image: "",
    link:"https://re-law-lookup-production-6926.up.railway.app/",
    projectDescription: "Keyword Project using MySQL, Node.js, Handelbars ",
  },
  {
    id: 2,
    title: "Random Movie Generator",
    image: "https://re-law-lookup-production-6926.up.railway.app/",
    projectDescription: "Random movie generator using HTML, CSS, JavaScript, API's",
  },

  {
    id: 3,
    title: "Study List",
    image: "https://jelu113.github.io/prework-studyguide/",
    projectDescription: "My first deployed work, using CSS and HTML",
  },
  {
    id: 4,
    title: "Real Estate Keywords",
    image: "https://re-law-lookup-production-6926.up.railway.app/",
    projectDescription: " ",
  },
  {
    id: 5,
    title: "Real Estate Keywords",
    image: "https://re-law-lookup-production-6926.up.railway.app/",
    projectDescription: " ",
  },
  {
    id: 6,
    title: "Real Estate Keywords",
    image: "https://re-law-lookup-production-6926.up.railway.app/",
    projectDescription: " ",
  },
];
  return (
  

    <>
      <h1>Projects</h1>
      <br />
      <ul className="organize">
      
       {projectsArray.map((project) => {
          <ProjectCard headline = {project.title} href = {""} img = {""}/>

       }
       )}
        {/* <div className="direction">
          <br />
          <p className="picHeadline">
            Random movie generator using HTML, CSS, JavaScript, API's{" "}
          </p>

          <a
            href="https://mrpolkadot.github.io/movie-night/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="src/assets/movie-night-page.png"
              alt="Movie Night"
              className="photo"
            ></img>
          </a>
        </div>

        <div className="direction">
          <p className="picHeadline"></p>
          <br />
          <a
            href="https://jelu113.github.io/prework-studyguide/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="src/assets/Prework-study-guide.jpg"
              alt="Keyword"
              className="photo"
            ></img>
          </a>
        </div>

        <div className="direction">
          <br />
          <p className="picHeadline"></p>
          <br />
          <a
            href="https://re-law-lookup-production-6926.up.railway.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="src/assets/Project2.jpg"
              alt="Keyword"
              className="photo"
            ></img>
          </a>
        </div>
        <div className="direction">
          <br />
          <p className="picHeadline"></p>
          <br />
          <a
            href="https://re-law-lookup-production-6926.up.railway.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="src/assets/Project2.jpg"
              alt="Keyword"
              className="photo"
            ></img>
          </a>
        </div>
        <div className="direction">
          <br />
          <p className="picHeadline"></p>
          <br />
          <a
            href="https://re-law-lookup-production-6926.up.railway.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="src/assets/Project2.jpg"
              alt="Keyword"
              className="photo"
            ></img>
          </a>
        </div>  */}
      </ul>
    </>
  );
}
