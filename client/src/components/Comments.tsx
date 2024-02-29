import { Box, Button, Grid, Typography } from "@mui/material";
import { useState } from "react";

function Comment() {
    return (
        <Grid sx={{ display: "flex", padding: 2, gap: 4 }}>
            <Box
                component="img"
                sx={{
                    height: 40,
                    width: 40,
                    borderRadius: "50%",
                }}
                alt="The house from the offer."
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
            />
            <Box>
                <Box>
                    <Typography variant="overline" display="block" gutterBottom>
                        Han Solo
                    </Typography>
                    <Typography variant="caption" display="block" gutterBottom>
                        a day ago
                    </Typography>
                </Box>
                <Typography variant="body2" gutterBottom>
                    body2. Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit. Quos blanditiis tenetur unde suscipit, quam beatae
                    rerum inventore consectetur, neque doloribus, cupiditate
                    numquam dignissimos laborum fugiat deleniti? Eum quasi
                    quidem quibusdam.
                </Typography>
                <Typography variant="overline" display="block" gutterBottom>
                    Reply to
                </Typography>
            </Box>
        </Grid>
    );
}

const Comments = () => {
    const [show, setShow] = useState(true);

    return (
        <Grid sx={{ paddingY: 4 }}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="subtitle1" gutterBottom>
                    2 replies
                </Typography>
                <Button
                    size="medium"
                    sx={{ border: "none" }}
                    onClick={() => setShow(!show)}
                >
                    {show ? "collapse" : "expand"}
                </Button>
            </Box>
            <hr />
            {show && (
                <Box>
                    <Comment />
                    <Comment />
                </Box>
            )}
        </Grid>
    );
};

export default Comments;
