import React from 'react';
import { Form, Button, Modal, ModalHeader, Col,Label,Input,FormGroup } from 'reactstrap';
import {connect} from 'react-redux';
import {addItem} from '../actions/itemActions'; 
class ModalItem extends React.Component {

    state = {
        modal: false,
        name:''
      };
    
    onSubmit = ()=>{

    }

    toggle = ()=>{
        this.setState({
            modal: !this.state.modal
        })   
     };

     render() {
        return (
          <div>
            <Button  color="dark" onClick={this.toggle}>{this.props.buttonLabel}Add Item</Button>
            <Modal isOpen={this.state.modal} toggle={this.toggle} className= {this.props.className}>
              <ModalHeader toggle={this.toggle}>Add Item</ModalHeader>
              <Form onSubmit={this.onSubmit}>
                <FormGroup>
                    <Col >
                        <Label for="exampleText"></Label>
                            <Input
                                placeholder='Add Item' />
                    </Col>
                    <Button>Send</Button>
	            </FormGroup>
              </Form>
            </Modal>
          </div>
        );
      }

      
}

mapStateToProps = (state)=> ({
    item: state.item
});
export default connect(mapStateToProps,{addItem})(ItemModal);