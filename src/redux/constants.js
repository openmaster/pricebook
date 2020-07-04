export const priceRangeMenu = [
    {key: 0, text: 'All Prices', value: 0, min_: null, max_: null},
    {key: 1, text: '$0 to $2', value: 1, min_: 0, max_: 2},
    {key: 2, text: '$3 to $5', value: 2, min_: 3, max_: 5},
    {key: 3, text: '$6 to $8', value: 3, min_: 6, max_: 8},
    {key: 4, text: '$9 to $12', value: 4, min_: 9, max_: 12},
    {key: 5, text: '$13 and above', value: 5, min_: 13, max_: null},  
]

export const getPriceRangeComparision = (value, selector) => {
    let result = ''
    const range = priceRangeMenu.filter(r => r.value === value)[0]
    console.log(range)
    if(!range){
        return false;
    }
    if(range.min_){
        result = selector + ' >= ' + range.min_ + ' && ';
    } 

    if(range.max_){
        result = result +  selector + ' <= ' + range.max_;
    } 
    return result;
}
