import React, { Component } from 'react';
import CommonHeader from '../../common/Header'
import SearchBar from '../../common/SearchBar'
import './styles.css'

class Layout extends Component {

    render() {
        return (
            <div className="Layout" id="Layout">
                <CommonHeader />
                <SearchBar />
                <main>
                    {this.props.children}
                </main>
            </div>
        );
    }
}

export default Layout
