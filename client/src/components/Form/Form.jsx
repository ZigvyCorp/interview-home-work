import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from "react-file-base64";
import useStyles from "./styles";
import { createPost, updatePost } from "../../redux/actions/postAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Form = ({ currentId, setCurrentId }) => {
    const [postData, setPostData] = useState({
        title: "",
        message: "",
        tags: "",
        selectedFile: "",
    });

    const [title, setTitle] = useState("Creating");

    const user = JSON.parse(localStorage.getItem("profile"));

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const post = useSelector((state) =>
        currentId
            ? state.postReducer.posts.find((p) => p._id === currentId)
            : null
    );

    const classes = useStyles();

    useEffect(() => {
        if (post) {
            setPostData(post);
        }
    }, [post]);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setPostData({
            ...postData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (currentId === 0) {
            dispatch(createPost({ ...postData, name: user?.name }, navigate));
        } else {
            dispatch(updatePost(currentId, { ...postData, name: user?.name }));
        }

        clearData();
    };

    const clearData = () => {
        setCurrentId(null);
        setPostData({
            title: "",
            message: "",
            tags: "",
            selectedFile: "",
        });
    };

    if (!user?.name) {
        return (
            <Paper className={classes.paper}>
                <Typography variant="h6" align="center">
                    Please Sign In to create your own memories and like other's
                    memories.
                </Typography>
            </Paper>
        );
    }

    return (
        <Paper className={classes.paper} elevation={6}>
            <form
                autoComplete="off"
                noValidate
                className={`${classes.root} ${classes.form}`}
                onSubmit={handleSubmit}
            >
                <Typography variant="h6">
                    {postData._id == null
                        ? "Creating a Memory"
                        : "Updating a Memory"}
                </Typography>
                <TextField
                    name="title"
                    variant="outlined"
                    label="Title"
                    fullWidth
                    value={postData.title}
                    onChange={handleChange}
                />
                <TextField
                    name="message"
                    variant="outlined"
                    label="Message"
                    fullWidth
                    value={postData.message}
                    onChange={handleChange}
                />
                <TextField
                    name="tags"
                    variant="outlined"
                    label="Tags"
                    fullWidth
                    value={postData.tags}
                    onChange={(e) =>
                        setPostData({
                            ...postData,
                            tags: e.target.value
                                .split(",")
                                .map((el) => el.trim()),
                        })
                    }
                />
                <div className={classes.fileInput}>
                    <FileBase
                        type="file"
                        multiple={false}
                        onDone={({ base64 }) =>
                            setPostData({
                                ...postData,
                                selectedFile: base64,
                            })
                        }
                    />
                    <img
                        src={postData.selectedFile}
                        className={classes.fileInput}
                    />
                </div>
                <Button
                    type="submit"
                    className={classes.buttonSubmit}
                    variant="contained"
                    color="primary"
                    size="large"
                    fullWidth
                >
                    Submit
                </Button>
                <Button
                    type="submit"
                    className={classes.buttonSubmit}
                    variant="contained"
                    color="secondary"
                    size="small"
                    fullWidth
                    onClick={clearData}
                >
                    Clear
                </Button>
            </form>
        </Paper>
    );
};

export default Form;
