import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { User } from '@schemas';
import { CreateUserDto, UpdateUserDto } from '@dto';
import { QueryOption } from '@common';

export interface UserQueryFilter {
  ids?: any[];
  id?: string;
}

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  create(createUserDto: CreateUserDto) {
    return this.userModel.create(createUserDto);
  }

  findAll(filter: UserQueryFilter = {}, option: QueryOption = {}) {
    const { ids } = filter;
    const { fields, offset, limit } = option;

    const query = this.userModel.find(ids ? { _id: { $in: ids } } : {});
    if (fields) query.select(fields);
    if (offset) query.skip(offset);
    if (limit) query.limit(limit);
    return query.lean();
  }

  findOne(filter: UserQueryFilter = {}, option: QueryOption = {}) {
    const query = this.userModel.findById(filter.id);
    const { fields } = option;
    if (fields) query.select(fields);
    return query.lean();
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.userModel
      .findByIdAndUpdate(id, updateUserDto, { new: true })
      .lean();
  }

  remove(id: string) {
    return this.userModel.deleteOne({ _id: id });
  }
}
