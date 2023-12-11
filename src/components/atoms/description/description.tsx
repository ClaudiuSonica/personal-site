import "./description.scss";

interface DescriptionProps {
  className?: string;
}

const Description: React.FC<DescriptionProps> = ({className}) => {
  return (
    <div className={className}>
      <p>Hello. I'm Claudiu Sonica. An self-taught ambitious Front-End Developer based in Mures, Romania. 📌</p>
    </div>
  )
}

export default Description;