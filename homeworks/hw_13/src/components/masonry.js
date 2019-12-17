import Masonry from 'masonry-layout';
import imagesLoaded from 'imagesloaded';

const masonrySample = new Masonry( '.output-js', {
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    gutter: 10,
    stagger: '0.03s',
    percentPosition: true,
  });

const imagesLoadedSample = imagesLoaded('.output-js');

imagesLoadedSample.on('progress', ()=>{
    masonrySample.layout()
})

