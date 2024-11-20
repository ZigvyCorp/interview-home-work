import React, {Component} from 'react';
import './header.css';
import {Input} from "antd";
import {connect} from "react-redux";
import {searchPostByTitle} from "../../redux/postsSlice";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue: ''
        }
        this.handleSearch = this.handleSearch.bind(this);
        this.onSearch = this.onSearch.bind(this);
    }

    onSearch(e) {
        if (e.key === "Enter") {
            this.props.searchText(this.state.searchValue)
        }
    }

    handleSearch(e) {
        this.setState({
            searchValue: e.target.value
        })
    }

    render() {
        return (<div className="header">
            <div className="header__logo">LOGO</div>
            <div className="header__title">BLOG</div>
            <div className="header__user">USER</div>
            <div className="header">
                <div className="header__logo">LOGO</div>
                <div className="header__title">BLOG</div>
                <div className="header__user">USER</div>

            </div>
            <Input
                disabled={true}
                className="header__search"
                placeholder="Press enter for search"
                onChange={this.handleSearch}
                onKeyPress={this.onSearch}
                style={{
                    width: 400,
                }}
            />
        </div>);
    }
}
const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        searchText: (keyword) => {
            dispatch(searchPostByTitle(keyword))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);
