import React from 'react';
import { connect } from 'react-redux';
import { Input, Button, Icon, Menu } from 'semantic-ui-react';

class BatchPriceChange extends React.Component{
    render(){
        
        return(
            <Menu secondary>
              <Menu.Menu position="right">
                <Menu.Item>
                <Input type="text" position="right"
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
    
    return (state);
}
export default connect(mapStateToProps)(BatchPriceChange)