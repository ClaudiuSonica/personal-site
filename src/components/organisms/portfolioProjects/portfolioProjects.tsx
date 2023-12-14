import Description from "../../atoms/description/description";
import PageTitle from "../../atoms/pageTitle/pageTitle";
import ProjectDetails from "../../molecules/projectDetails/projectDetails";
import "./portfolioProjects.scss";

const PortfolioProjects = () => {
  return (
    <div className="portfolio-projects">
      <div className="projects--header">
        <PageTitle title="Portfolio" />
        <Description className="description" text="Each project is a unique piece of development 🧩" />
      </div>
      <div className="projects--content">
        <ProjectDetails />
      </div>
    </div>
  )
}

export default PortfolioProjects;