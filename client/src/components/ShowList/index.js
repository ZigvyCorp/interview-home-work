import React from 'react'
import {
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Typography,
} from '@material-ui/core'

export default function ShowList({blog}) {
    const randomDay = Math.floor(Math.random() * 17) + 1
    console.log(randomDay);
    return (
        <Card>
            <CardHeader
                title={blog.title || blog.name}
                subheader={`${randomDay}/02/2022`}
            />
            <CardContent>
                <Typography varient='h5' color='textPrimary'>{blog.body}</Typography>
            </CardContent>
            <CardActions>
                <Typography component="span" color="textSecondary">coments</Typography>
            </CardActions>
        </Card>
    )
}