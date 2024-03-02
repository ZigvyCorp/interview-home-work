import { Request, Response } from 'express'
import Blogs from '../models/blogModel'
import Comments from '../models/commentModel'
import { IReqAuth } from '../config/interface'
import mongoose from 'mongoose'


const Pagination = (req: IReqAuth) => {
  let page = Number(req.query.page) * 1 || 1;
  let limit = Number(req.query.limit) * 1 || 4;
  let skip = (page - 1) * limit;

  return { page, limit, skip };
}

const blogCtrl = {
  createBlog: async (req: IReqAuth, res: Response) => {
    if(!req.user) return res.status(400).json({msg: "Invalid Authentication."})

    try {
      const { title, content,  } = req.body

      const newBlog = new Blogs({
        user: req.user._id,
        title: title.toLowerCase(), 
        content,
      })

      await newBlog.save()
      res.json({
        ...newBlog._doc,
        user: req.user
      })

    } catch (err: any) {
      return res.status(500).json({msg: err.message})
    }
  },
  getHomeBlog: async (req: Request, res: Response) => {
    const { limit, skip } = Pagination(req);
    try {
      const data = await Blogs.aggregate([
        {
          $facet: {
            totalData: [
              {
                $lookup: {
                  from: "users",
                  let: { user_id: "$author" },
                  pipeline: [
                    { $match: { $expr: { $eq: ["$_id", "$$user_id"] } } },
                    { $project: { password: 0 } },
                  ],
                  as: "user",
                },
              },
              { $unwind: "$user" },
              { $sort: { createdAt: -1 } },
              { $skip: skip },
              { $limit: limit },
            ],
            totalCount: [{ $count: "count" }],
          },
        },
        {
          $project: {
            count: { $arrayElemAt: ["$totalCount.count", 0] },
            totalData: 1,
          },
        },
      ]);
      const blogs = data[0].totalData;
      const count = data[0].count;

      let total = 0;
      if (count % limit === 0) {
        total = count / limit;
      } else {
        total = Math.floor(count / limit) + 1;
      }
      res.send({ blogs, total });
    } catch (e) {
      res.status(500).send({ e });
    }
  },
  
  getBlog: async (req: Request, res: Response) => {
    try {
      const blog = await Blogs.findOne({_id: req.params.id})
      .populate("user", "-password")

      if(!blog) return res.status(400).json({ msg: "Blog does not exist." })

      return res.json(blog)
    } catch (err: any) {
      return res.status(500).json({ msg: err.message })
    }
  },
  searchBlogs: async (req: Request, res: Response) => {
    try {
      const blogs = await Blogs.aggregate([
        {
          $search: {
            index: "searchTitle",
            autocomplete: {
              "query": `${req.query.title}`,
              "path": "title"
            }
          }
        },
        { $sort: { createdAt: -1 } },
        { $limit: 5},
        {
          $project: {
            title: 1,
            description: 1,
            thumbnail: 1,
            createdAt: 1
          }
        }
      ])

      if(!blogs.length)
        return res.status(400).json({msg: 'No Blogs.'})

      res.json(blogs)

    } catch (err: any) {
      return res.status(500).json({msg: err.message})
    }
  },
}


export default blogCtrl;