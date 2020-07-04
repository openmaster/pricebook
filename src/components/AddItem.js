import React from 'react';
import { connect } from 'react-redux';
import {add_item} from '../redux/actions';

class AddItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {name:"test", price: "3.23"}
    }
    handleAddItem = (e) =>{
        e.preventDefault();
        this.props.add_item(this.state);
        this.setState({name:"", price:""});
    }
    updateInput = (type, val) => {
        this.setState({});
        console.log(this.state)
    }
    
    render(){
        return(
            <div>
                <form className="form-inline" >
                    <input className="form-control" type="text" placeholder="Name" value={this.state.name} onChange={(e) => this.setState({name: e.target.value})}/>
                    <input className="form-control" type="text" placeholder="Price" value={this.state.price} onChange={(e) => this.setState({price: e.target.value})}/>
                    <button className="btn btn-success" onClick={(e) => this.handleAddItem(e)}>Add</button>
                </form>
            </div>
        )
    }

}

export default connect(null, {add_item})(AddItem)