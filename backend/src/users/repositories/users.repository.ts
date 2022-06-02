import { EntityRepository, Repository } from "typeorm";
import { User } from "../entities/user.entity";
import { FindUserResponse } from "../type/user.type";

@EntityRepository(User)
export class UserRepository extends Repository<User> {}