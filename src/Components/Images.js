import React from 'react';
import { LazyLoadImage, trackWindowScroll } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function Images({ imageUrl, scrollPosition }) {
  return (
    <a href = {imageUrl} target = '__blank'>
      <LazyLoadImage
        effect = 'blur'
        src = {imageUrl}
        width = '250px'
        height = '250px'
        delayTime={10000}
      />
    </a>
  )
}

export default trackWindowScroll(Images);
