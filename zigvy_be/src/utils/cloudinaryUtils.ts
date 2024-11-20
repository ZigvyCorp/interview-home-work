export const listResouces = async (cloud: any, prefix: string, next_cursor: any = null) => {
  try {
    const arr: any = [];
    const checkPrefix = await cloud.api.sub_folders(prefix);

    if (checkPrefix) {
      if (checkPrefix.folders.length > 0) {
        throw new Error("prefix-is-wrong");
      }

      await recursion(cloud, arr, prefix);
      return arr;
    } else {
      throw new Error("no-folders");
    }
  } catch (error: any) {
    console.log("prefix utils", error);

    if (error.error.http_code === 404) {
      throw new Error("no-folders");
    }

    throw new Error(error.error.message);
  }
};

const recursion = async (cloud: any, results: Array<any>, prefix: string, next_cursor: any = null) => {
  try {
    await cloud.api.resources(
      {
        resource_type: "image",
        type: "upload",
        prefix: `${prefix}`,
        max_results: 500, //can be any value up to 500
        next_cursor: next_cursor,
      },
      function (_: any, res: any) {
        res.resources.forEach(function (resource: any) {
          //Do some processing or checks
          results.push(resource.secure_url);
        });

        if (res.next_cursor) {
          listResouces(results, res.next_cursor, prefix);
        } else {
          // console.log("Done", results);
        }
      }
    );
  } catch (error) {}
};
