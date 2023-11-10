import ProjectCard from "../components/ProjectCard";

export default function Portfolio() {
  const projectsArray = [
    {
      id: 1,
      title: "Real Estate Keywords",
      image: "../src/assets/Project2.jpg",
      link: "https://re-law-lookup-production-6926.up.railway.app/",
      github: "Keyword Project using MySQL, Node.js, Handelbars ",
    },
    {
      id: 2,
      title: "Random Movie Generator",
      image: "../src/assets/movie-night-page.png",
      link: "https://mrpolkadot.github.io/movie-night/",
      github:
        "Random movie generator using HTML, CSS, JavaScript, API's",
    },

    {
      id: 3,
      title: "Study List",
      image: "../src/assets/Prework-study-guide.jpg",
      link: "https://jelu113.github.io/prework-studyguide/",
      github: "My first deployed work, using CSS and HTML",
    },
    {
      id: 4,
      title: "Password Generator",
      image: "../src/assets/Grabanumber.png",
      link: "https://jelu113.github.io/Grab-a-number/",
      github: "This app will return a random password",
    },
    {
      id: 5,
      title: "Go Maybe No",
      image: "../src/assets/Go.maybe.no2.jpg",
      link: "https://github.com/Jelu113/go.maybe.no",
      github: "Using a weather API, CSS and HTML",
    },
    {
      id: 6,
      title: "Time 4 it",
      image: "../src/assets/time4it.jpg",
      link: "https://jelu113.github.io/time4it/",
      github: "",
    },
  ];
  return (
    <>
      <h1>Projects</h1>
      <br />
      <ul className="organize">
        {projectsArray.map((project) => (
          <ProjectCard
            key={project.id}
            headline={project.title}
            href={project.link}
            img={project.image}
            github ={project.github}
          />
        ))}
      </ul>
    </>
  );
}
