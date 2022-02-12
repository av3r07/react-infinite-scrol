import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Images from './Images';

function Landing({ images, isLoading, loadImagesRequest }) {
    useEffect(() => {
        window.scrollTo(0, 0)
        loadImagesRequest();
        window.addEventListener('scroll', () => {
            if((window.innerHeight + window.scrollY) >= document.body.offsetHeight && !isLoading) {
                loadImagesRequest();
            }
        });
        return window.removeEventListener('scroll', () => {});
    }, [isLoading, loadImagesRequest])
    return (
        <div className = 'container'>
            <ul id = 'images'>
                {(images && images.length > 0) && (
                images.map(image => (
                    <li key = {image.id}>
                        <Images imageUrl={image.urls.full} />
                    </li>
                ))
            )}
            </ul>
        </div>
    )
}

const mapStateToProps = state => ({
    images : state.images,
    isLoading : state.isLoading
});

const mapDispatchToProps = dispatch => ({
    loadImagesRequest : () => dispatch({
        type : 'FETCH_IMAGES_REQUESTED'
    })
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing)
