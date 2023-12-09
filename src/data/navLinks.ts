import { v4 as uuidv4 } from 'uuid';


export const navLinks = {
  links: [
    {
      id: uuidv4(),
      name: "Home",
      link: "/#home"
    },
    {
      id: uuidv4(),
      name: "About",
      link: "/#about"
    },
    {
      id: uuidv4(),
      name: "Projects",
      link: "/#projects"
    },
    {
      id: uuidv4(),
      name: "Contact",
      link: "/#contact"
    }
  ]
}