import {
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Typography,
} from '@material-ui/core'

export default function ShowList({value}) {
    // const dataList = useContext(DataConText)
    // const postsList = dataList.posts
    // const commentsList = dataList.comments
    // const usersList = dataList.users

    // const userPost = postsList.map(post => (
    //     {
    //         ...post,
    //         ...usersList.find(user => user.id === post.userId)
    //     }))


    // const userComment = userPost.map(info => (
    //     { 
    //         ...info,
    //         ...commentsList.find(comment => comment.postId === info.id) 
    //     }))


    // console.log(userPost)
    // console.log(userComment)
    const randomDay = Math.floor(Math.random() * 17) + 1

    return (

        <Card>

            <CardHeader
                // title={whichType === 'posts' ? blog.title : blog.name}
                title={`Author: ${value.name}`}
                subheader={`Created: ${randomDay}/02/2022`}
            />
            <CardContent>
                <CardHeader title={`Title: ${value.title}`} />
                <Typography varient='h5' color='textPrimary'>{value.body}</Typography>
            </CardContent>
            <CardActions>
                <Typography component="span" color="textSecondary">coments</Typography>
            </CardActions>

        </Card>



    )
}

