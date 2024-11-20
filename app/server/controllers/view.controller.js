const FakeData = require("../utils/fakeData");
exports.getHome = async (req, res) => {
  res.status(200).render("home");
};
exports.fake = async (req, res) => {
  await FakeData.fake();

  res.status(200).render("home");
};
