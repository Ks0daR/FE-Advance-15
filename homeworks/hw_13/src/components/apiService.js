const baseUrl = 'https://pixabay.com/api/?image_type=photo&orientation=horizontal&per_page=12&key=14644057-ca985d2fae582aa79c730fd25';

export default {
  page: 1,
  query: '',
  input: false,

  get searchQuary() {
    return this.query;
  },

  set searchQuary(input) {
    this.query = input;
  },

  fetchQuery() {
    const options = {
      headers: {
        key: '14644057-ca985d2fae582aa79c730fd25',
        image_type: 'photo',
      },
    };

    const paramenetsRequest = `&q=${this.query}&image_type=photo`;
    const numberPage = `&page=${this.page}`;

    return fetch(`${baseUrl}${paramenetsRequest}${numberPage}`).then(response => response.json());
  },
};

// https://pixabay.com/api/?key=14644057-ca985d2fae582aa79c730fd25&q=yellow+flowers&image_type=photo
