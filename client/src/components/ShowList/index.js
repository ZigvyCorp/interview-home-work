import {
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Typography,
} from '@material-ui/core'

export default function ShowList({ value }) {
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

