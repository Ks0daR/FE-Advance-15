import Masonry from 'masonry-layout';
import imagesLoaded from 'imagesloaded';

const masonrySample = new Masonry('.grid', {
  itemSelector: '.grid-item',
  columnWidth: '.grid-sizer',
  stagger: '0.03s',
  percentPosition: true,
});

imagesLoaded('.grid').on('progress', () => {
  console.log('imagesLoadedSample.onProgress called');
  masonrySample.layout();
});

export default masonrySample;
