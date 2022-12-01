import Button from "react-bootstrap/Button";

function Tag({ tagName }) {
  const colorArray = [
    "outline-primary",
    "outline-secondary",
    "outline-success",
    "outline-danger",
    "outline-warning",
    "outline-info",
    "outline-dark",
    "outline-light",
  ];

  const randomColor = colorArray[Math.floor(Math.random() * 7)];

  return (
    <Button className="mx-2"  variant={randomColor}>
      {tagName}
    </Button>
  );
}

export default Tag;
