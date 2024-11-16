const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString();
};

export { formatDate };
