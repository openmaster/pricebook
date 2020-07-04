import React from 'react';
import { connect } from 'react-redux';
import { Input, Button, Icon, Menu } from 'semantic-ui-react';
import { batchPriceChange } from '../redux/actions';

class BatchPriceChange extends React.Component{
    constructor(props){
        super(props);
        this.state = {...this.props, error: false};
        this.handlePriceChange = this.handlePriceChange.bind(this)
    }
    validChange = (change) => {
        const regex = /^([0-9]|\+|-|\*|\/)([0-9]|.+)(%|)$/
        if(change.match(regex)){
            return true;
        } else {
            return false;
        }
    }

    handlePriceChange(e, {value}){
        this.setState({priceChange: value})
        if (this.validChange(value)){
            this.setState({error: false})
            this.state.batchPriceChange(value);
        } else {
            // show error flage
            this.state.batchPriceChange('');
            if(value.length>0){
                this.setState({error: true});
            } else {
                this.setState({error: false});
            }
        }
    }
    render(){
        console.log(this.props)
        return(
            <Menu secondary>
              <Menu.Menu position="right">
                <Menu.Item>
                <Input type="text" position="right"
                    value={this.state.priceChange}
                    error={this.state.error}
                    onChange={this.handlePriceChange}
                    placeholder="Batch Price Changes"
                    label={<Button><Icon name="question circle"/></Button>}
                    labelPosition="right"
                />
                </Menu.Item>
                <Menu.Item>
                <Button position="right" className="float-right">Apply</Button>
                </Menu.Item>
              </Menu.Menu>
              </Menu>
          
        )
        }
}
const mapStateToProps = state => {
    //console.log(state);
    
    return (state.priceChange);
}
export default connect(mapStateToProps, {batchPriceChange})(BatchPriceChange)