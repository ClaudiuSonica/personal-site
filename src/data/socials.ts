import { v4 as uuidv4 } from "uuid";
import github from "/assets/github.svg";
import linkedin from "/assets/linkedin.svg";

export const socials = {
  socialLinks: [
    {
      id: uuidv4(),
      name: "Github",
      link: "https://github.com/ClaudiuSonica",
      icon: github,
    },
    {
      id: uuidv4(),
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/claudiu-sonica-395aab218?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      icon: linkedin,
    },
  ],
};
