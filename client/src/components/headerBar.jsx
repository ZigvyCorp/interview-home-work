import Container from "react-bootstrap/Container";
import { colors } from "../themes/colors";
import { images } from "../themes/images";
import styles from "../styles/headerBar.module.css";
export const HeaderBar = () => {
    return (
        <Container fluid style={$container}>
            <div style={$leftZone}>
                <span style={$leftEmptyZone}></span>
                <img style ={$logo} src={images.headerBarLogo} alt="Header bar logo" />
            </div>
            <div style={$centerZone} className={styles.centerZone}>Blogs</div>
            <div style={$rightZone}>
                <img src={images.userAvatar} style={$userAvatar} alt="User avatar" />
                Adam Levine
            </div>
        </Container>
    );
}

const $container = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  height: 60,
  border: `3px solid ${colors.headerBorder}`,
  position: "relative",
  padding: 0,
  paddingRight: 25
};

const $leftZone = {
  display: "flex",
  flexDirection: "row",
  height: "100%",
};

const $leftEmptyZone = {
  width: 50,
  height: "100%",
  backgroundColor: colors.leftEmptyZone,
  marginRight: 10,
};

const $logo = {
  width: 50,
  height: "100%",
};

const $centerZone = {
  backgroundColor: colors.leftEmptyZone,
  height: 60,
  width: "14%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: 500,
  fontSize: 20,
  border: `3px solid ${colors.headerBorder}`,
  position: "absolute",
  left: "50%", 
  transform: "translateX(-50%)",
};

const $rightZone = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  height: "100%",
  fontSize: 20,
  fontWeight: 500,
};

const $userAvatar = {
  height: "100%",
  width: 65,
  borderLeft: `3px solid ${colors.headerBorder}`,
  borderRight: `3px solid ${colors.headerBorder}`,
  marginRight: 10
};