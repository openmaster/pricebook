import React from 'react';
import {connect} from 'react-redux';
import {delete_item} from '../redux/actions';
import {getItemsByDepartment} from '../redux/selectors/pricelist';
import { Segment } from 'semantic-ui-react';

class PriceList extends React.Component{
    render(){
        //console.log(this.props)
        const priceBook = this.props.priceList;
        //console.log(priceBook);
        const list = <ul className="list-group">
            {priceBook.map(item => {
                return(
                    <li className="list-group-item" key={item.id}><span className="float-left">
                        {item.id}</span>{item.name}  --  Price: {item.price} 
                        <button className="btn btn-danger float-right" onClick={() => this.props.delete_item(item.id)}>Delete</button>
                    </li>
                )
            })}
        </ul>

        return(
        <div>
            {(priceBook.length > 0) ? list : <Segment>No Data...</Segment>} 
        </div>);
    }
}
const mapStateToProps = state => {
    //console.log(state);
    const {filters, priceList} = state;
    return getItemsByDepartment(priceList, filters);
}
export default connect(mapStateToProps, {delete_item})(PriceList)