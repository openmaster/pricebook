/* eslint-disable default-case */
//import { getPriceRangeComparision } from '../constants';

const leadOperators = {
    '+':(a, b) => (parseFloat(a) + parseFloat(b)).toFixed(2),
    '-':(a, b) => (parseFloat(a) - parseFloat(b)).toFixed(2),
    '*':(a, b) => (parseFloat(a) * parseFloat(b)).toFixed(2),
    '/':(a, b) => (parseFloat(a) / parseFloat(b)).toFixed(2)
}
const trailingOperators = {
    '%': (a, b) => (parseFloat(a) * parseFloat(b) / 100).toFixed(2)
}

export const getItemsByDepartment = (priceList, filters, priceChange) => {
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
    if(priceChange){
        console.log('hitting price chagne filter')
        let change = priceChange.priceChange;
        
        let leadOptr = leadOperators[change.toString().charAt(0)];
        let trailingOptr = trailingOperators[change.toString().charAt(change.length-1)]
        console.log(trailingOptr);
        if(trailingOptr && leadOptr){
            console.log('hitting both optr')
            change = change.slice(1, change.length-1);
            items = items.map(item => {
                item.priceF = leadOptr(item.price, trailingOptr(item.price, change));
                return item;
            })
        } else if(leadOptr){
            change = change.slice(1);
            items = items.map(item => {
                item.priceF = leadOptr(item.price, change);
                console.log();
                return item;
            })
        } else if(change.length > 0) {
            items = items.map(item => {
                item.priceF = change;
                return item;
            })
        } else {
            items = items.map(item => {
                item.priceF = '';
                return item;
            })
        }
    }

    return {priceList:[...items]};
}