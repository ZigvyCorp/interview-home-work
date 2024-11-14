import { title } from "process";

export type ICondition = {
  page?: number;
  _limit?: number;
  title?: string;
  id?: String;
};
export const findWithCondition = async (model: any, condition?: ICondition) => {
  let data = [];
  let allData = [];
  if (condition?.id) {
    data = await model.findById(condition?.id);
    return { data };
  } else {
    allData = await model.find();
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
      allData = await model.find({ title: { $regex: filter.searching } });
      filter.searching = condition.title;
      data = await model
        .find({ title: { $regex: filter.searching } })
        .skip(filter.skip)
        .limit(filter.limit);
    } else {
      data = await model.find().skip(filter.skip).limit(filter.limit);
    }
    return { allData, data };
  }
};
