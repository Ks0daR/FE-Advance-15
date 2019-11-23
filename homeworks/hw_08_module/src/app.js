import refs from './components/refs';
import createListElement from './components/createListElement';

refs.output.insertAdjacentHTML('afterbegin', [...createListElement].join(''));
