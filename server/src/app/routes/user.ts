import express from "express";
import User from "../models/user";
import Comment from "../models/comment";
import Post from "../models/post";
import auth from "../middleware/auth";
import multer from "multer";
import sharp from "sharp";
import { PICTURE_TYPE_REGEX } from "../core/Common/Regex";
import { HTTP_STATUS_CODE } from "../core/Common/HttpStatusCode";

const router = express.Router();

router.post("/users", async (req, res) => {
  const user = User(req.body);
  try {
    await user.save();
    res.status(201).send(user);
  } catch (err) {
    console.log("err", err);
    res.status(HTTP_STATUS_CODE.BAD_REQUEST).send(err);
  }
});

router.get("/users", auth, async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (e) {
    res.status(HTTP_STATUS_CODE.SERVER_ERROR).send();
  }
});

router.get("/users/me", auth, async (req, res) => {
  try {
    const { user, token }: any = req;
    res.send({ user, token });
  } catch (e) {
    res.status(HTTP_STATUS_CODE.SERVER_ERROR).send();
  }
});

router.get("/users/:uid/comments", async (req, res) => {
  const { uid: _id } = req.params;
  const { limit = 5 }: any = req.query;

  try {
    const comments = await Comment.find({ owner: _id }).limit(limit);
    res.status(200).send(comments);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get("/users/:uid/posts", async (req, res) => {
  const { uid: _id } = req.params;
  const { limit = 5 }: any = req.query;

  try {
    const post = await Post.find({ owner: _id }).limit(limit);
    console.log(post);
    res.status(200).send(post);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.get("/users/:id", auth, async (req, res) => {
  try {
    const _id = req.params.id;
    const user = await User.findById(_id);
    if (!user) {
      res.status(400).send("Don't have user");
      return;
    }
    res.send(user);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.post("/users/sign-in", async (req, res) => {
  const { username, password } = User(req.body);

  try {
    const user = await User.findByCredentials({ username, password });
    const token = await user.generateAuthToken();
    await user.save();
    res.status(HTTP_STATUS_CODE.OK).send({ user, token });
  } catch (err) {
    console.log("err", err);
    res.status(HTTP_STATUS_CODE.BAD_REQUEST).send(err);
  }
});

router.post("/users/sign-up", async (req, res) => {
  const user = new User(req.body);
  try {
    const token = await user.generateAuthToken();
    user.token = token;
    await user.save();

    res.status(HTTP_STATUS_CODE.CREATED).send({ user, token });
  } catch (err) {
    console.log("err", err);
    res.status(HTTP_STATUS_CODE.BAD_REQUEST).send(err);
  }
});

router.patch("/users/log-out", auth, async (req: Request | any, res) => {
  try {
    const { user } = req;
    user.tokens = user.tokens.filter(
      (token: { token: string }) => token.token !== req.token
    );
    await user.save();
    res.send();
  } catch (err) {
    res.status(HTTP_STATUS_CODE.BAD_REQUEST).send(err);
  }
});

router.patch("/users/log-out-all", auth, async (req: Request | any, res) => {
  try {
    const { user } = req;
    user.tokens = [];
    await user.save();
    res.send();
  } catch (err) {
    res.status(400).send(err);
  }
});

router.patch("/users/log-out-all", auth, async (req: Request | any, res) => {
  try {
    const { user } = req;
    user.tokens = [];
    await user.save();
    res.send();
  } catch (err) {
    res.status(400).send(err);
  }
});

router.patch("/users/me/edit", auth, async (req: Request | any, res) => {
  try {
    let { user } = req;
    const updates = Object.keys(req.body);
    const allowedUpdates: any = ["name", "email", "password", "gender"];
    const isValidOperation = updates.every((update: string) =>
      allowedUpdates.includes(update)
    );
    if (!isValidOperation) {
      res.status(400).send({
        error: "Invalid updates!",
      });
    }
    updates.forEach((update: string) => (user[update] = req.body[update]));
    await user.save();
    res.send(user);
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
});

router.delete("/users/me/delete", auth, async (req: Request | any, res) => {
  try {
    let { user } = req;
    await user.remove();
    res.send(user);
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
});

const upload: any = multer({
  fileFilter: (
    req: Request | any,
    file: Express.Multer.File,
    callback: (error: Error | null, acceptFile: boolean) => void
  ) => {
    if (!PICTURE_TYPE_REGEX.test(file.originalname)) {
      return callback(new Error("Please upload an image"), false);
    }
    callback(undefined, true);
  },
}).single("img");

router.post(
  "/users/me/avatar",
  auth,
  // upload.single("img"),
  async (req, res) => {
    upload(req, res, async function (err: any) {
      if (err instanceof multer.MulterError) {
        // A Multer error occurred when uploading.
        res.status(500).send(err);
      } else if (err) {
        // An unknown error occurred when uploading.
        res.status(500).send(err);
      }
      //   // Everything went fine.
      const { user, file }: any = req;
      const buffer = await sharp(file.buffer).resize(250, 250).png().toBuffer();
      user.avatar = buffer;
      try {
        await user.save();
        res.status(HTTP_STATUS_CODE.CREATED).send({});
      } catch (err) {
        console.log("err", err);
        res.status(HTTP_STATUS_CODE.BAD_REQUEST).send(err);
      }
    });
  }
);

router.get("/users/me/avatar", auth, async (req, res) => {
  try {
    const { user }: any = req;
    res.set("Content-Type", "image/jpg");
    if (!user.avatar) {
      res.status(HTTP_STATUS_CODE.NOT_FOUND).send("not found avatar!");
    }
    res.send(user.avatar);
  } catch (e) {
    res.status(HTTP_STATUS_CODE.SERVER_ERROR).send();
  }
});

router.get("/users/:id/avatar", async (req, res) => {
  const { id }: any = req.params;
  try {
    const user = await User.findById(id);
    res.set("Content-Type", "image/jpg");
    if (!user || !user.avatar) {
      res.status(HTTP_STATUS_CODE.NOT_FOUND).send("not found avatar!");
    }
    res.send(user.avatar);
  } catch (e) {
    res.status(HTTP_STATUS_CODE.SERVER_ERROR).send();
  }
});

router.delete("/users/me/avatar", auth, async (req, res) => {
  try {
    const { user }: any = req;
    user.avatar = null;
    await user.save();
    res.send();
  } catch (e) {
    res.status(HTTP_STATUS_CODE.SERVER_ERROR).send();
  }
});

module.exports = router;
