import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./myCard.css";

interface CustomCardProps {
  title: string;
  description: string;
  link?: string;
  img: string;
}

const CustomCard: React.FC<CustomCardProps> = ({
  title,
  description,
  link,
  img,
}) => {
  return (
    <Card className="card">
      <Card.Img className="card__image" variant="top" src={img} />
      <Card.Body className="card__body">
        <h2 className="small-margin-top">{title}</h2>

        <Card.Text className="card__description">{description}</Card.Text>
        {link && (
          <Button className="card__button" variant="primary" href={link}>
            Les mer
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default CustomCard;
