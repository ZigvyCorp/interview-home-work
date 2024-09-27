import Container from "react-bootstrap/Container";
import { images } from "../themes/images";
import { colors } from "../themes/colors";
export const Reply = () => {
    return (
        <Container fluid style={$container}>
            <img style={$avatar} src={images.userAvatar} alt="User avatar" />
            <div style={$replyTextContainer}>
                <div style={$userInfo}>
                    <p style={$userInfoText(colors.replierName)}>Han Solo</p>
                    <p style={$userInfoText(colors.replyTime)}>a day ago</p>
                </div>
                <p style={$replyText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <p style={Object.assign($userInfoText(colors.replyToText), {textAlign: "left", marginTop: 5})}>Reply to</p>
            </div>
        </Container>
    );
}

const $container = {
    display: "flex",
    flexDirection: "row",
}

const $avatar = {
    width: 45,
    height: 45,
    borderRadius: "50%",
    marginRight: 10,
    objectFit: "cover",
}

const $replyTextContainer = {
    display: "flex",
    lineHeight: 0.6,
    flexDirection: "column",
}

const $userInfo = {
    display: "flex",
    flexDirection: "row",
    columnGap: 10,
}

const $userInfoText = (color) => ({
    fontSize: 15,
    fontWeight: 500,
    color
})

const $replyText = {
    fontSize: 17,
    fontWeight: 500,
    lineHeight: 1.4,
    textAlign: "left",
    marginTop: -5
}