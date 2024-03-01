import * as commentService from '../services/commentService'

const getComments = async (req, res) => {
    try {
        const response = await commentService.getComments()
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Error at comment controller ' + error
        })
    }
}


module.exports = {
    getComments,
}