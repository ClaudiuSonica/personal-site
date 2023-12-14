import { v4 as uuidv4 } from "uuid";

export const projectData = {
  projects: [
    {
      id: uuidv4(),
      name: "World Wise Travel 🌍",
      description:
        "This website is an online platform, which allows the user to select, add, remove and edit cities and information about them. It's great for people who love to travel and in the same time they want to remember the most important facts or memories about an specific city. It's also great for planning future trips. It provides an user-friendly interface and easy interaction.",
      link: "https://worldwise-app1.netlify.app/",
      github: "https://github.com/ClaudiuSonica/worldwise",
      image: "/assets/worldwise.png",
      technologies: ["React", "SCSS"],
    },
    {
      id: uuidv4(),
      name: "React Quiz ❔",
      description: "Within this project the user can interact with an React based Quiz to test his knowledge about the library. It provides easy interaction and great user experience with nice feedback for the answers and results, it also displays the percentage of correct answers and a custom message based on the result.",
      link: "https://react-quiz-app111.netlify.app/",
      github: "https://github.com/ClaudiuSonica/react-quiz-frontend",
      image: "/assets/quiz.png",
      technologies: ["React", "SCSS", "Node", "Express"],
    },
    {
      id: uuidv4(),
      name: "Job List Template 💼",
      description: "This website is designed to be able to create job offers according to some user needs, it also allows the user to filter jobs based on his needs. Because of it's easy and user-friendly interface, the users can easily display and select the jobs. This project is used within the ONG in which i volunteer and will generate jobs manually or automatic based on some API.",
      link: "https://peviitor-ro.github.io/TEMPLATE-jobList-Vanilla/",
      github: "https://github.com/peviitor-ro/TEMPLATE-jobList-Vanilla",
      image: "/assets/jobs.png",
      technologies: ["HTML", "CSS", "JavaScript"],
    }
  ],
};
