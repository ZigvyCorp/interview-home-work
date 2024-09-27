import Container from "react-bootstrap/Container";
import Accordion from "react-bootstrap/Accordion";
import { specialColors, colors } from "../themes/colors";
import { useState } from "react";
import { ChangeTextColorButton, Reply } from "../components";

export const Post = ({detail}) => {
    const [textColor, setTextColor] = useState(colors.black);

    const handleTextColorOnChange = (textColor) => {
        setTextColor(textColor);
    }

    const handleTextTruncate = (text) => {
        if (text.length > 100) {
            return text.slice(0, 100) + '...';
        }
        return text;
    }

    return (
        <Container fluid style={$container}>
            <p style={$title(textColor)}>Post title 1</p>
            <div style={$subTextContainer}>
                <div>
                    <p style={$subText(textColor)}>Author: John Smith</p>
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
            <p style={$content(textColor)}>{detail ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas libero sapien, sollicitudin ac mi nec, dignissim vulputate metus. Suspendisse bibendum nisl ut urna ultrices pulvinar. Donec efficitur dictum magna sed ultrices. Pellentesque non est fermentum, placerat libero sit amet, hendrerit libero. Vestibulum nec nibh eu neque auctor iaculis ut in dui. Sed viverra feugiat cursus. Quisque auctor non orci id congue. Fusce at convallis lectus. Quisque finibus porttitor nisi, nec semper felis fringilla quis." : handleTextTruncate("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas libero sapien, sollicitudin ac mi nec, dignissim vulputate metus. Suspendisse bibendum nisl ut urna ultrices pulvinar. Donec efficitur dictum magna sed ultrices. Pellentesque non est fermentum, placerat libero sit amet, hendrerit libero. Vestibulum nec nibh eu neque auctor iaculis ut in dui. Sed viverra feugiat cursus. Quisque auctor non orci id congue. Fusce at convallis lectus. Quisque finibus porttitor nisi, nec semper felis fringilla quis.")}</p>
            <Accordion flush style={$accordionContainer}>
                <Accordion.Item eventKey="0">
                    <Accordion.Header >2 replies</Accordion.Header>
                    <Accordion.Body style={$accordionBody}>
                        <Reply />
                        <Reply />
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
    fontWeight: 600
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