import "./description.scss";

interface DescriptionProps {
  className?: string;
  text: string;
}

const Description: React.FC<DescriptionProps> = ({className, text}) => {
  return (
    <div className={className}>
      <p>{text}</p>
    </div>
  )
}

export default Description;