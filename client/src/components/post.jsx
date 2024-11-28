import Container from "react-bootstrap/Container";
import Accordion from "react-bootstrap/Accordion";
import { specialColors, colors } from "../themes/colors";
import { useState, useEffect } from "react";
import { ChangeTextColorButton, Reply } from "../components";
import styles from "../styles/post.module.css";
import { useNavigate } from "react-router-dom"

export const Post = ({detail, data}) => {
    const [textColor, setTextColor] = useState(colors.black);
    const [author, setAuthor] = useState('');
    const [comments, setComments] = useState([]);
    const navigate = useNavigate();

    const handleTextColorOnChange = (textColor) => {
        setTextColor(textColor);
    }

    const handleTextTruncate = (text) => {
        if (text.length > 100) {
            return text.slice(0, 100) + '...';
        }
        return text;
    }

    const handleNavigateToDetailedPost = () => {
        navigate(`/post/${data.id}`);
    }

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${data.userId}`)
        .then(response => response.json())
        .then(user => setAuthor(user.name))

        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${data.id}`)
        .then(response => response.json())
        .then(comments => setComments(comments))
    }, [data.userId, data.id]);

    return (
        <Container fluid style={$container}>
            <button style={$title(textColor)} onClick={handleNavigateToDetailedPost}><p className={styles.title}>{data.title}</p></button>
            <div style={$subTextContainer}>
                <div>
                    <p style={$subText(textColor)}>Author: {author}</p>
                    <p style={$subText(textColor)}>Created at: Sep 20, 2018</p>
                </div>
                <div style={$buttonContainer}>
                    {
                        Object.entries(specialColors).map(([key, value]) => {
                            return <ChangeTextColorButton
                                key={key}
                                text={key}
                                color={value}
                                textColor={textColor}
                                onClick={handleTextColorOnChange}
                            />
                        })
                    }
                </div>
            </div>
            <p style={$content(textColor)}>{detail ? data.body : handleTextTruncate(data.body)}</p>
            <Accordion flush style={$accordionContainer}>
                <Accordion.Item eventKey="0">
                    <Accordion.Header >{comments.length} {comments.length === 1 ? "reply" : "replies"}</Accordion.Header>
                    <Accordion.Body style={$accordionBody}>
                        {
                            comments.map((comment, index) => (
                                <Reply key={index} data={comment} />
                            ))
                        }
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Container>
    );
}

const $container = {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "100%",
}

const $title = (color) => ({
    color,
    fontSize: 43,
    fontWeight: 600,
    lineHeight: 1.3,
    border: "none",
    backgroundColor: "transparent"
})

const $subTextContainer = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
}

const $subText = (color) => ({
    color,
    fontSize: 24,
    fontWeight: 500,
    lineHeight: 0.7,
    textAlign: "left",
})

const $buttonContainer = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "41%",
    flexWrap: "wrap",
    gap: 10,
    alignSelf: "flex-end",
}

const $content = (color) => ({
    marginTop: 30,
    fontSize: 23,
    fontWeight: 500,
    lineHeight: 1.4,
    textAlign: "left",
    color
})

const $accordionContainer = {
    marginTop: 40,
    borderBottom: "1px solid #E6E6E6",
}

const $accordionBody = {
    display: "flex",
    flexDirection: "column",
    gap: 35
}