import {
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Typography,
} from '@material-ui/core'

export default function ShowList({ value }) {
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
            <CardHeader title={value.title} align='center' fontWeight='10px' />
            <CardContent>
                <Typography varient='h5' color='textPrimary'>{`Author: ${value.name}`}</Typography>
                <Typography varient='h5' color='textPrimary'>{`Created at: Feb ${randomDay}, 2022`}</Typography>
            </CardContent>

            <CardContent>

                <Typography varient='h5' color='textPrimary'>{value.body}</Typography>
            </CardContent>
            <CardActions>
                <Typography component="span" color="textSecondary">replies</Typography>
            </CardActions>

        </Card>



    )
}

