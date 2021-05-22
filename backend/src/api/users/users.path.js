const { Router } = require("express");
const validate = require("../../helper/validate");
const {
  getUsers,
  getUser,
  createUser,
  updateProfile,
  deleteUser,
} = require("./users.controller");

const {
  createUserBodySchema,
  getUserParamsSchema,
  updateUserBodySchema,
} = require("./schemas");

const router = Router();

router
  .get("/", getUsers)
  .get("/:id", validate({ params: getUserParamsSchema }), getUser)
  .post("/", validate({ body: createUserBodySchema }), createUser)
  .put(
    "/:id",
    validate({ params: getUserParamsSchema, body: updateUserBodySchema }),
    updateProfile
  )
  .delete("/:id", validate({ params: getUserParamsSchema }), deleteUser);

  module.exports =router;
