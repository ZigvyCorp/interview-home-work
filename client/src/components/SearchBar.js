import { Button, Container, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { onQuerySearch } from "../redux/actions";

export default function SearchBar() {
    const dispatch = useDispatch();
    const { titleQuery, posts } = useSelector((state) => state.reducer);

    return (
        <Container className="d-flex w-50">
            <Form className="d-flex w-100">
                <Form.Control
                    type="search"
                    placeholder="Search by title"
                    className="me-2 rounded-pill"
                    aria-label="Search"
                    value={titleQuery}
                    onChange={(e) => {
                        dispatch(onQuerySearch(e.target.value, posts))
                    }}
                />
                <Button className="rounded-pill" variant="outline-light">
                    Search
                </Button>
            </Form>
        </Container>
    );
}