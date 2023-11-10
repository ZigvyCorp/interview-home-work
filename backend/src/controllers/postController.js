import sequelize from "../models/connect.js";
import initModels from "../models/init-models.js";
import { Sequelize } from "sequelize";

const Op = Sequelize.Op;
const model = initModels(sequelize);


const getPost = async (req, res) => {
    const page = req.query.page || 1;
    const offset = (page - 1) * 3;
    const data = await model.posts.findAll({
        include: ["owner_user"],
        offset: offset,
        limit: 3 
    })

    res.send(data);
};

const getPostByIdPost = async (req, res) => {
    const { idPost } = req.params;
    const data = await model.posts.findOne({
        where: {
            id: idPost,
        },
        include: ["owner_user"],
    })

    res.send(data);
};
 
const getComment = async (req, res) => { 
    let { idPost } = req.params;
    const data = await model.comments.findAll({
        where: {
            post: idPost,
        },
        include: ["owner_user"]
    })
    res.send(data);
}
 
const getPostByTitle = async (req, res) => { 
    let { search } = req.query;
    const data = await model.posts.findAll({
        where: {
            title: {
                [Op.like] : `%${search}%`
            }
        },
        include: ["owner_user"],
    })
    res.send(data);
 }
export { getPost,  getComment, getPostByIdPost, getPostByTitle };