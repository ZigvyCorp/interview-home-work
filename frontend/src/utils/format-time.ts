export const formatTime = (created_at: number) => {
  // Chuyển timestamp thành đối tượng Date
  const date = new Date(created_at);

  // Tạo chuỗi ngày theo định dạng "Nov 15, 2024"
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(date);
  return formattedDate;
};
