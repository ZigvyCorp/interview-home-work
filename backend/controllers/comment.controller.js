const comment = require('../models/comment')

const getComments = async (req, res) => {
    await comment.aggregate(
        [ 
            { $match : { post : Number(req.params.id)} },
            {
                $lookup: {
                    from: "users",
                    localField: "owner",
                    foreignField: "id",
                    as: "user_infor"
                },
            }
            
        ])
        .then((comments) => {

            return res.status(200).json({
                code: 200,
                message: "Success!",
                data: comments
            })
        })
        .catch(e => {
            return res.status(500).json({
                code: 500,
                message: e.message,
            })
        })

}

module.exports = {
    getComments
}