/* eslint-disable default-case */
//import { getPriceRangeComparision } from '../constants';

export const getItemsByDepartment = (priceList, filters) => {
    //console.log(filters);
    //console.log(priceList.items);
    let items = priceList.items;
    if(filters.selectedDep){
        items =  items.filter(item => item.dep === filters.selectedDep);
        //return {priceList:[...filteredItems]};
    }
    switch(filters.priceRange){
        case 1:
            items = items.filter(item => (item.price > 0 && item.price <= 2));
            break;
        case 2:
            items = items.filter(item => (item.price >= 3 && item.price <= 5));
            break;
        case 3:
            items = items.filter(item => (item.price >= 6 && item.price <= 8));
            break;
        case 4:
            items = items.filter(item => (item.price >= 9 && item.price <= 12));
            break;
        case 5:
            items = items.filter(item => (item.price > 12));
            break;
    }
    if(filters.searchContent){

        items = items.filter(item => (item.name.match(filters.searchContent) || item.id.toString().match(filters.searchContent) || item.price.toString().match(filters.searchContent)))
    }

    return {priceList:[...items]};
}