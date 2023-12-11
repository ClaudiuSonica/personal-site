import "./pageTitle.scss";

interface PageTitleProps {
  title: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ title }) => {
  return (
    <div className="page-title">
      <h2>{title}</h2>
    </div>
  );
};

export default PageTitle;
