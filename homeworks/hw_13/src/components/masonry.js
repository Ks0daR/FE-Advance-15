import Masonry from 'masonry-layout';
import imagesLoaded from 'imagesloaded';
import refs from './refs';

const masonrySample = new Masonry('.output-js', {
  itemSelector: '.grid-item',
  columnWidth: '.grid-sizer',
  gutter: 10,
  stagger: '0.03s',
  percentPosition: true,
});

const imagesLoadedSample = imagesLoaded(refs.output);

imagesLoadedSample.on('progress', () => {
  masonrySample.layout();
});

console.log(imagesLoadedSample);

export default masonrySample;
