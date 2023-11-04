export const upperCaseFirstChar = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const processDescriptionTextOfPost = (des) => {
  const first100Characters = des.substring(0, 100);
  return (
    first100Characters.charAt(0).toUpperCase() + first100Characters.slice(1)
  );
};
