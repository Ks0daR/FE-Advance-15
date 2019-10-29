const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const ref = document.querySelector('#gallery');

const imagesList = images.map(({ url, alt }) => `<li class ="gallery-listItem"><img class ="gallery-img" src=${url} alt=${alt}</li>`);
ref.insertAdjacentHTML('afterbegin', imagesList);

// const imagesList = images.map(({ url, alt }) => {
//   const li = document.createElement('li');
//   const img = document.createElement('img');
//   img.src = url;
//   img.alt = alt;
//   li.style.cssText = 'display: flex; justify-content: center;';
//   img.style.cssText = 'width: 200px';
//   li.append(img);
//   return li;
// });
// ref.append(...imagesList);
