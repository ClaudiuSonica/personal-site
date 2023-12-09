import { v4 as uuidv4 } from "uuid";
import html from "/assets/html.svg";
import css from "/assets/css.svg";
import javascript from "/assets/javascript.svg";
import react from "/assets/react.svg";
import redux from "/assets/redux.svg";
import sass from "/assets/sass.svg";
import typescript from "/assets/typescript.svg";
import node from "/assets/node.svg";
import express from "/assets/express.svg";
import git from "/assets/git.svg";

export const techStack = {
  stack: [
    {
      id: uuidv4(),
      name: "HTML",
      icon: html,
    },
    {
      id: uuidv4(),
      name: "CSS",
      icon: css,
    },
    {
      id: uuidv4(),
      name: "JavaScript",
      icon: javascript,
    },
    {
      id: uuidv4(),
      name: "TypeScript",
      icon: typescript,
    },
    {
      id: uuidv4(),
      name: "React",
      icon: react,
    },
    {
      id: uuidv4(),
      name: "Sass",
      icon: sass,
    },
    {
      id: uuidv4(),
      name: "Redux",
      icon: redux,
    },
    {
      id: uuidv4(),
      name: "Node",
      icon: node,
    },
    {
      id: uuidv4(),
      name: "Express",
      icon: express,
    },
    {
      id: uuidv4(),
      name: "Git",
      icon: git,
    },
  ],
};
