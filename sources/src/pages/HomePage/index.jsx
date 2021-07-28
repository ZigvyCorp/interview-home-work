import React from 'react';
import './styles.scss'
import ThumbnailPost from './components/ThumbnailPost';

function HomePage(props) {
    return (
        <div className="homepage">
            <ThumbnailPost />
        </div>
    );
}

export default HomePage;