import ProjectCard from "../components/ProjectCard";


export default function Portfolio() {
  const projectsArray = [
    {
      id: 1,
      title: "Real Estate Keywords",
      image: "/assets/Project2.jpg",
      link: "https://re-law-lookup-production-6926.up.railway.app/",
      description: "Keyword Project using MySQL, Node.js, Handelbars ",
      github: "https://github.com/Jelu113/RE-law-lookup",
    },
    {
      id: 2,
      title: "Random Movie Generator",
      image: "/assets/movie-night-page.png",
      link: "https://mrpolkadot.github.io/movie-night/",
      description: "Random movie generator using HTML, CSS, JavaScript, API's",
      github: "https://github.com/MrPolkadot/movie-night",
    },

    {
      id: 3,
      title: "Study List",
      image: "/assets/Prework-study-guide.jpg",
      link: "https://jelu113.github.io/prework-studyguide/",
      description: "My first deployed work, using CSS and HTML",
      github: "https://github.com/Jelu113/prework-studyguide",
    },
    {
      id: 4,
      title: "Password Generator",
      image: "/assets/Grabanumber.png",
      link: "https://jelu113.github.io/Grab-a-number/",
      description: "This app will return a random password",
      github: "https://github.com/Jelu113/Grab-a-number",
    },
    {
      id: 5,
      title: "Go Maybe No",
      image: "/assets/Go.maybe.no2.jpg",
      link: "https://github.com/Jelu113/go.maybe.no",
      description: "Using a weather API, CSS and HTML",
      github: "https://github.com/Jelu113/go.maybe.no",
    },
    {
      id: 6,
      title: "Time 4 it",
      image: "/assets/time4it.jpg",
      link: "https://jelu113.github.io/time4it/",
      description: "Daily schedule using CSS, JavaScript and HTML",
      github: "https://github.com/Jelu113/time4it",
    },
  ];
  return (
    <>
      <div>
        <div className="topMargin">
          <h1>Projects</h1>
        </div>
          <ul className="projectsGrid">
            {projectsArray.map((project) => (
              <ProjectCard
                key={project.id}
                headline={project.title}
                href={project.link}
                img={project.image}
                description={project.description}
                github={project.github}
              />
            ))}
          </ul>
      </div>     
    </>
  );
}
