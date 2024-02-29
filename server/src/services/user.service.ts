import { NotFoundError } from "../errors/NotFoundError";
import { IUsersModel, UserModel } from "../models/user.model";
import bcrypt, { compareSync } from "bcrypt";
import { AuthenticationError } from "../errors/AuthenticationError";
import { ConflictError } from "../errors/ConflictError";
async function getAll(query?: any) {
  let users;
  if (!query || !query.populate || query.populate == "") {
    users = await UserModel.find().select(
      "id username name dob created_at -_id"
    );
  } else {
    users = await UserModel.find(
      {},
      { _id: false, updatedAt: false, password: false }
    ).populate(query.populate, "-_id id owner tags created_at");
  }

  return users;
}

async function getById(id: string) {
  const user = await UserModel.findOne(
    { id },
    { _id: false, updatedAt: false, password: false }
  );
  if (!user) throw new NotFoundError(`id: ${id} is not exist`);
  return user;
}

async function create(user: IUsersModel) {
  const check = await getByUserName(user.username);
  if (check) throw new ConflictError(`username: [${user.username}] is exists`);
  const total = await UserModel.countDocuments();
  const salt = bcrypt.genSaltSync();
  user.password = bcrypt.hashSync(user.password, salt);
  user.id = total + 1;
  const newUser = new UserModel(user).save();
  return newUser;
}

async function login(username: string, password: string) {
  const user = await getByUserName(username);
  if (!user) throw new NotFoundError(`${username} is not found`);

  const check = compareSync(password, user.password);
  if (!check) throw new AuthenticationError(`password is not correct`);
  return user;
}

async function getByUserName(username: string) {
  return await UserModel.findOne({ username });
}
export { getAll, getById, create, getByUserName, login };
