import axios from 'axios'

export const getAllPosts = async (req, res) => {
  try {
    const posts = await axios.get(process.env.API_URL + '/posts')
    const start = (+req.query.pageIndex * +req.query.pageSize) - +req.query.pageSize
    const end = +req.query.pageIndex * +req.query.pageSize
    const slicedPosts = posts.data.slice(start, end)

    for(const [i, p] of slicedPosts.entries()) {
      const user = await axios.get(`${process.env.API_URL}/users/${p.userId}`)
      const comments = await axios.get(`${process.env.API_URL}/posts/${p.id}/comments`)

      if(comments) slicedPosts[i].comments = comments.data
      if(user) slicedPosts[i].user = user.data
    }

    res.json({
      allPosts: slicedPosts,
      amountData: posts.data.length,
      pageIndex: +req.query.pageIndex,
      pageSize: +req.query.pageSize
    })
  } catch (e) {
    console.log(e)
    res.status(404).send(e.message)
  }
}

export const searchPosts = async (req, res) => {
  try {
    console.log(req.query.term)
    // const posts = await axios.get(process.env.API_URL + '/posts')
    // const filteredPosts = posts.data.filter(p => p.title.includes(req.query.term))

    // for(const [i, p] of filteredPosts.entries()) {
    //   const user = await axios.get(`${process.env.API_URL}/users/${p.userId}`)
    //   const comments = await axios.get(`${process.env.API_URL}/posts/${p.id}/comments`)
    //
    //   if(comments) filteredPosts[i].comments = comments.data
    //   if(user) filteredPosts[i].user = user.data
    // }

    // console.log(filteredPosts)

    res.send()
    // res.json({
    //   allPosts: filteredPosts,
    //   amountData: filteredPosts?.length,
    //   pageIndex: 1,
    //   pageSize: 5
    // })
  } catch (e) {
    console.log(e)
    res.status(404).send(e.message)
  }
}
