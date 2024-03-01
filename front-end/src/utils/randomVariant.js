const getRandomVariant = () => {
  const variants = [
    "outline-dark",
    "outline-primary",
    "outline-secondary",
    "outline-success",
    "outline-danger",
    "outline-warning",
    "outline-info",
  ];
  const randomIndex = Math.floor(Math.random() * variants.length);
  return variants[randomIndex];
};

module.exports = getRandomVariant;
