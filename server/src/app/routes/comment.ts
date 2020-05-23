import express from "express";
import Comment from "../models/comment";
const router = express.Router();
import auth from "../middleware/auth";



router.get("/comments/:id", async (req, res) => {
  const { id: _id } = req.params;
  try {
    const comment = await Comment.findOne({ _id });
    res.status(200).send(comment);
  } catch (error) {
    res.status(500).send(error);
  }
});



router.delete("/comments/:id/delete", auth, async (req, res) => {
  const { id: _id } = req.params;
  try {
    const comment = await Comment.findOneAndDelete({ _id });
    comment.save();
    res.status(200).send(comment);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.patch("/comments/:id/edit", auth, async (req, res) => {
  const { id: _id } = req.params;
  const updates = Object.keys(req.body);
  const allowedValidator: any = ["name", "price", "description"];
  const isValidOperation = updates.every((update) =>
    allowedValidator.includes(update)
  );
  if (!isValidOperation) {
    res.status(500).send({ error: "Invalid updates!" });
  }
  try {
    const comment: any = await Comment.findOne({ _id });
    updates.forEach((update) => (comment[update] = req.body[update]));
    comment.save();
    res.status(200).send(comment);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});
module.exports = router;
