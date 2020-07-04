import { combineReducers } from 'redux';
import priceList from './priceList';
import filters from './filters';
import priceChange from './batchPriceChange';

export default combineReducers({priceList, filters, priceChange});