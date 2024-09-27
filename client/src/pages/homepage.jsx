import Container from "react-bootstrap/Container";
import { HeaderBar } from "../components";
export const HomePage = () => {
    return (
        <Container fluid style={$container}>
            <HeaderBar />
            <div style={$separator}></div>
            <div>Hello</div>
        </Container>
    );
}

const $container = {
    marginTop: 15
}

const $separator = {
    margin: "40px auto"
}