import refs from './refs';
import makeUpCard from './makeUpCard';
import menuData from '../database/menu.json';
import switchThemes from './switchThemes';

makeUpCard(menuData, refs.output);

refs.switch.addEventListener('change', switchThemes);
