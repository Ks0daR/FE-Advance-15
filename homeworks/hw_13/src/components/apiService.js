const baseUrl =  'https://pixabay.com/api/?image_type=photo&orientation=horizontal&per_page=12&key=14644057-ca985d2fae582aa79c730fd25';

export default {
  page: 1,
  fetchQuery(query) {
    const options = {
      headers: {
        key: '14644057-ca985d2fae582aa79c730fd25',
        image_type: 'photo',
      },
    };

    const paramenetsRequest = `&q=${query}&image_type=photo`;
    const numberPage = `&page=${this.page}`;

    fetch(`${baseUrl}${paramenetsRequest}${numberPage}`)
      .then(response => response.json())
      .then(data => console.log(data));
  },
};

// https://pixabay.com/api/?key=14644057-ca985d2fae582aa79c730fd25&q=yellow+flowers&image_type=photo
