import { title } from "process";

export type ICondition = {
  page?: number;
  _limit?: number;
  title?: string;
  id?: String;
  postId?: String;
};
export const findWithCondition = async (model: any, condition?: ICondition) => {
  let data = [];
  let allData = [];
  if (condition?.id) {
    data = await model.findById(condition?.id).populate("owner", "username");
    return { data };
  } else {
    allData = await model.find().populate("owner", "username");
    let filter = {
      skip: 0,
      limit: allData.length,
      searching: "",
    };
    if (condition?._limit) {
      filter.limit = condition._limit;
    }
    if (condition?.page) {
      filter.skip = (condition?.page - 1) * filter.limit;
    }
    if (condition?.title) {
      allData = await model
        .find({ title: { $regex: filter.searching } })
        .populate("owner", "username");
      filter.searching = condition.title;
      data = await model
        .find({ title: { $regex: filter.searching } })
        .populate("owner", "username")
        .skip(filter.skip)
        .limit(filter.limit);
    } else {
      if (condition?.postId) {
        data = await model
          .find({ post: condition?.postId })
          .populate("owner", "username")
          .skip(filter.skip)
          .limit(filter.limit);
      } else {
        data = await model
          .find()
          .populate("owner", "username")
          .skip(filter.skip)
          .limit(filter.limit);
      }
    }
    return { allData, data };
  }
};
