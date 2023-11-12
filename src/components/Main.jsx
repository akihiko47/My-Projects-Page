import React from "react";
import TiltElement from "./TiltElement";

const projects = [
  {
    name: "banger",
    icon: "./assets/banger.jpg",
    link: "https://github.com/akihiko47/Banger",
    key: 1
  },
  {
    name: "Rock Paper Scissors",
    icon: "./assets/RockPaperScissors.jpg",
    link: "https://github.com/akihiko47/RockPaperScissors_Cellular-Automata",
    key: 2
  },
  {
    name: "BOUNCER",
    icon: "./assets/bouncer.jpg",
    link: "https://github.com/akihiko47/Bouncer",
    key: 3
  },
  {
    name: "Voronoi diagram",
    icon: "./assets/voronoi.jpg",
    link: "https://github.com/akihiko47/Voronoi-diagram",
    key: 4
  },
  {
    name: "Heat simulation",
    icon: "./assets/heat.jpg",
    link: "https://github.com/akihiko47/Heat-Simulation",
    key: 5
  },
  {
    name: "Water Simulation",
    icon: "./assets/WaterSim.jpg",
    link: "https://github.com/akihiko47/Water-Simulation",
    key: 6
  },
  {
    name: "physics engine",
    icon: "./assets/physics.jpg",
    link: "https://github.com/akihiko47/Verlet-Physics-Engine",
    key: 7
  },
  {
    name: "particle sandbox",
    icon: "./assets/particles.jpg",
    link: "https://github.com/akihiko47/JS-Particle-Simulation",
    key: 8
  },
  {
    name: "Div Physics",
    icon: "./assets/divs.jpg",
    link: "https://github.com/akihiko47/Div-Physics",
    key: 9
  },
];

function Main() {
  const projectsItems = projects.map((project) => (
    <TiltElement
      name={project.name}
      icon={project.icon}
      link={project.link}
      key={project.key}
    />
  ));

  return (
    <div className="w-full bg-gradient-to-b from-background-950 to-background-940 from-0% to-20%">
      <h1 className="text-2xl lg:text-3xl text-text-50 font-extrabold text-center pt-16 font-bold">
        Projects
      </h1>
      <div className="p-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-[1240px] mx-auto">
        {projectsItems}
      </div>
    </div>
  );
}

export default Main;
