import { Box, Grid, Typography } from "@mui/material";
import Comments from "./Comments";

const Post = () => {
    return (
        <Grid sx={{ padding: 4, borderBottom: "2px solid black" }}>
            <Typography variant="h4" gutterBottom sx={{ textAlign: "center" }}>
                Post Title
            </Typography>
            <Box sx={{ marginY: 2 }}>
                <Typography variant="h6" gutterBottom>
                    Author:
                </Typography>
                <Typography variant="h6" gutterBottom>
                    Created at:
                </Typography>
            </Box>
            <Typography variant="body1" gutterBottom>
                body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quos blanditiis tenetur unde suscipit, quam beatae rerum
                inventore consectetur, neque doloribus, cupiditate numquam
                dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
            </Typography>
            <Comments />
        </Grid>
    );
};

export default Post;
