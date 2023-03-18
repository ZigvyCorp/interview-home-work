const getColor = (tag) => {
  let sumChars = 0;
  for (let i = 0; i < tag.length; i++) {
    sumChars += tag.charCodeAt(i);
  }

  const colors = [
    "#e67e22",
    "#2ecc71",
    "#3498db",
    "#8e44ad",
    "#e74c3c",
    "#1abc9c",
    "#2c3e50",
  ];
  return colors[sumChars % colors.length];
};

export { getColor };
