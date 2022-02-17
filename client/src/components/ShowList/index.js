import React from 'react'
import {
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Typography,
} from '@material-ui/core'

export default function ShowList({ posts, comments, users }) {
    const randomDay = Math.floor(Math.random() * 17) + 1
    // title={whichType === 'posts' ? blog.title : blog.name}
    return (
        <Card>
            <CardHeader
                title={posts.title}
                subheader={`${randomDay}/02/2022`}
            />
            <CardContent>
                <Typography varient='h5' color='textPrimary'>{users.name}</Typography>
            </CardContent>
            <CardActions>
                <Typography component="span" color="textSecondary">coments</Typography>
            </CardActions>
        </Card>
    )
}

