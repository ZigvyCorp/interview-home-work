import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    commentsOuterContainer: {
        display: "flex",
        justifyContent: "space-between",
    },
    commentsInnerContainer: {
        height: "200px",
        overflowY: "auto",
        marginRight: "30px",
    },
}));
