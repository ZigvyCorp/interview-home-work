import React, { Component } from 'react';
import CommonHeader from '../../common/Header'
import SearchBar from '../../common/SearchBar'

class Layout extends Component {

    render() {
        return (
            <div className="Layout" id="Layout">
                <CommonHeader />
                <SearchBar />
                <main className="p-4">
                    {this.props.children}
                </main>
            </div>
        );
    }
}

export default Layout
