import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { images } from "../themes/images";
import { colors } from "../themes/colors";

export const SearchBar = () => {
    const [searchText, setSearchText] = useState('');
    const navigate = useNavigate();
    
    const handleTextChange = (text) => {
        setSearchText(text);
    }

    const handleSearchSubmit = () => {
        navigate(`/search?title=${searchText}`)
    }

    return (
        <Container fluid style={$container}>
            <img style={$icon} src={images.search} alt="Search icon" />
            <input
                style={$input}
                type="text"
                placeholder="Post title"
                onChange={(e)=>handleTextChange(e.target.value)}
            />
            <Button style={$button} onClick={handleSearchSubmit} size="sm">Search</Button>
        </Container>
    );
}

const $container = {
    display: "flex",
    border: `1px solid ${colors.black}`,
    width: "fit-content",
    alignItems: "center",
    padding: 5
}

const $icon = {
    width: 25,
    height: 25,
    marginRight: 5
}

const $input = {
    border: "none",
    height: 30,
}

const $button = {
    border: "none",
    borderRadius: 0,
    height: 30
}