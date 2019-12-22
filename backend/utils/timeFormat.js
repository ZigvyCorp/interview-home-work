const days = ['Chủ Nhật', 'Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7'];

exports.formatVNDate = function(yourDate) {
  var date = new Date(yourDate);
  return `${
    days[date.getDay()]
  }, ngày ${date.getDate()} tháng ${date.getMonth() + 1}`;
};
