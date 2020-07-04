import React from 'react';
import {connect} from 'react-redux';
import {delete_item} from '../redux/actions';
import {getItemsByDepartment} from '../redux/selectors/pricelist';
import { Segment, Table } from 'semantic-ui-react';

class PriceList extends React.Component{
    render(){
        //console.log(this.props)
        const priceBook = this.props.priceList;
        //console.log(priceBook);
        const TabularList = <Table>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Id</Table.HeaderCell>
                    <Table.HeaderCell>Name</Table.HeaderCell>
                    <Table.HeaderCell>Department</Table.HeaderCell>
                    <Table.HeaderCell>Price</Table.HeaderCell>
                    <Table.HeaderCell>Action</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {priceBook.map(item => {
                    return(<Table.Row>
                        <Table.Cell>{item.id}</Table.Cell>
                        <Table.Cell>{item.name}</Table.Cell>
                        <Table.Cell>{item.dep}</Table.Cell>
                        <Table.Cell >{item.price}<div style={{color:'green'}}>{(item.priceF) && ( item.priceF)}</div></Table.Cell>
                        <Table.Cell><button className="btn btn-danger" onClick={() => this.props.delete_item(item.id)}>Delete</button></Table.Cell>
                    </Table.Row>)
                })}
            </Table.Body>
        </Table>
        return(
        <div>
            {(priceBook.length > 0) ? TabularList : <Segment>No Data...</Segment>} 
        </div>);
    }
}
const mapStateToProps = state => {
    //console.log(state);
    const {filters, priceList, priceChange} = state;
    return getItemsByDepartment(priceList, filters, priceChange);
}
export default connect(mapStateToProps, {delete_item})(PriceList)