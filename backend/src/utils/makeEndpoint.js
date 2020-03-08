import HttpStatus from 'http-status-codes'

export default handler => async (req, res, next) => {
  try {
    const result = await handler(req)

    res.status(HttpStatus.OK).json({ success: true, data: result })
  } catch (err) {
    next(err)
  }
}
