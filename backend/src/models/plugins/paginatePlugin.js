const paginatePlugin = (schema) => {
  schema.statics.paginate = async function (
    filter,
    { sortBy, page, limit, select, populate, lean, checkPaginate } = {},
  ) {
    const query = this.find(filter)

    if (sortBy) {
      query.sort(sortBy)
    }
    if (select) {
      query.select(select)
    }
    if (populate) {
      for (let populateOptions of populate) {
        query.populate(populateOptions)
      }
    }
    if (lean) {
      query.lean()
    }

    page = page || 1
    limit = limit || 10
    const skip = (page - 1) * limit

    query.skip(skip).limit(limit)

    if (checkPaginate) {
      const [data, totalRecords] = await Promise.all([
        query.exec(),
        this.countDocuments(filter).exec(),
      ])
      return {
        totalRecords,
        currentPage: page,
        totalPages: Math.ceil(totalRecords / limit),
        data,
      }
    }
    const data = await query.exec()
    return { data }
  }
}

module.exports = paginatePlugin
