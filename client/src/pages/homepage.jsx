import Container from "react-bootstrap/Container";
import Pagination from "react-bootstrap/Pagination";
import { HeaderBar, Post } from "../components";
import { colors } from "../themes/colors";
export const HomePage = () => {
    return (
        <Container fluid style={$container}>
            <HeaderBar />
            <div style={$separator}></div>
            <div style={$postsContainer}>
                <Post />
                <div style={$separatorLine}></div>
                <Post />
                <div style={$separatorLine}></div>
                <Post />
            </div>
            <div style={$paginationContainer}>
                <Pagination>
                    <Pagination.First />
                    <Pagination.Prev />
                    <Pagination.Item>{1}</Pagination.Item>
                    <Pagination.Ellipsis disabled/>
                    <Pagination.Item>{10}</Pagination.Item>
                    <Pagination.Item active>{11}</Pagination.Item>
                    <Pagination.Ellipsis disabled/>
                    <Pagination.Item>{20}</Pagination.Item>
                    <Pagination.Next />
                    <Pagination.Last />
                </Pagination>
            </div>
        </Container>
    );
}

const $container = {
    marginTop: 15
}

const $separator = {
    margin: "40px 0"
}

const $postsContainer = {
    display: "flex",
    flexDirection: "column",
    gap: 40
}

const $separatorLine = {
    width: "100%",
    height: 4,
    backgroundColor: colors.black
}

const $paginationContainer = {
    margin: 80,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: 10
}