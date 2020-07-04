import React from 'react';
import {connect} from 'react-redux';
import {set_dep, set_priceRange, search} from '../redux/actions';
import { Dropdown, Input, Menu } from 'semantic-ui-react';


class Filters extends React.Component{
    constructor(props){
        super(props);
        this.state = {...this.props, loading: false}
        this.handleDepartmentChange = this.handleDepartmentChange.bind(this);
        this.handlePriceRangeChange = this.handlePriceRangeChange.bind(this);
        this.handleSearchChange = this.handleSearchChange.bind(this);
    }
    handleDepartmentChange(e, {value}){
        this.setState({selectedDep: value})
        this.state.set_dep(parseInt(value));
    }
    handlePriceRangeChange(e, {value}){
        this.setState({priceRange: value});
        this.state.set_priceRange(parseInt(value));
    }
    handleSearchChange(e, {value}){
        this.setState({searchContent: value});
        this.state.search(value);
    }
    render(){
        //console.log(this.state);
        const {selectedDep, priceRange, loading} = this.state;
        const departments = [
            {key: 0, text: 'All Departments', value: 0},
            {key: 1, text: 'Dep 1', value: 1},
            {key: 2, text: 'Dep 2', value: 2},
            {key: 3, text: 'Dep 3', value: 3},
            {key: 4, text: 'Dep 4', value: 4},
            {key: 5, text: 'Dep 5', value: 5},
            {key: 6, text: 'Dep 6', value: 6}
        ]
        const priceRangeMenu = [
            {key: 0, text: 'All Prices', value: 0, min_: null, max_: null},
            {key: 1, text: '$0 to $2', value: 1, min_: 0, max_: 2},
            {key: 2, text: '$3 to $5', value: 2, min_: 3, max_: 5},
            {key: 3, text: '$6 to $8', value: 3, min_: 6, max_: 8},
            {key: 4, text: '$9 to $12', value: 4, min_: 9, max_: 12},
            {key: 5, text: '$13 and above', value: 5, min_: 12, max_: null},  
        ]

        return(
            <Menu secondary>
                <Menu.Item position="right">
                    <h2 className="logo">Pricebook</h2>
                </Menu.Item>
                <Menu.Item position="right">
                <Dropdown
                    placeholder='Select Department'
                    onChange={this.handleDepartmentChange}
                    selection 
                    options={departments}
                    value={selectedDep}  
                />
                </Menu.Item>
                <Menu.Item>
                <Dropdown
                    placeholder='Select Price Range'
                    onChange={this.handlePriceRangeChange}
                    selection 
                    options={priceRangeMenu}
                    value={priceRange}  
                />
                </Menu.Item>
                <Menu.Item>
                
                <Input icon='search' placeholder='Search...' value={this.state.searchContent}  onChange={this.handleSearchChange} loading={loading}/>
                </Menu.Item>
            </Menu>
        )
    }
}

const mapStateToProps = state => {
    return state.filters;
};

export default connect(mapStateToProps, {set_dep, set_priceRange, search})(Filters);