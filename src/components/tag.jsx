import Badge from "react-bootstrap/Badge";

function TagCard({ color, raza }) {
  return (
    <Badge pill bg={color}>
      {raza}
    </Badge>
  );
}

export default TagCard;
