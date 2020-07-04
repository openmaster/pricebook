import { combineReducers } from 'redux';
import priceList from './priceList';
import filters from './filters';

export default combineReducers({priceList, filters});