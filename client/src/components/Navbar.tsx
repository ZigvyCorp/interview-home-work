import { Box, Container, Grid } from "@mui/material";
import React from "react";

const Navbar = () => {
    return (
        <React.Fragment>
            <Grid
                sx={{
                    width: "100vw",
                    border: "2px solid black",
                }}
            >
                <Container
                    sx={{ display: "flex", justifyContent: "space-between" }}
                >
                    <Box sx={{ padding: 2 }}>Logo</Box>
                    <Box
                        sx={{
                            padding: "16px 32px",
                            borderLeft: "2px solid black",
                            borderRight: "2px solid black",
                        }}
                    >
                        Blogs
                    </Box>
                    <Box sx={{ padding: 2 }}>User</Box>
                </Container>
            </Grid>
        </React.Fragment>
    );
};

export default Navbar;
