import React from 'react';
import { Form, Button, Modal, ModalHeader, Col,Label,Input,FormGroup } from 'reactstrap';
import {connect} from 'react-redux';
import {addItem} from '../actions/itemActions'; 

class ItemModal extends React.Component {

    state = {
        modal: false,
        name:''
      };
    
    onSubmit = (e)=>{
      e.preventDefault();
      const newItem = {
        name:this.state.name
      }

      this.props.addItem(newItem);

      this.toggle();
    }
    onChange = (e)=>{
      this.setState({[e.target.name]:e.target.value})
    }

    toggle = ()=>{
        this.setState({
            modal: !this.state.modal
        })   
     };

     render() {
        return (
          <div>
            <Button 
              style={{margin:'1rem 0'}}  
              color="dark" onClick={this.toggle}
              >Add Item</Button>
            <Modal isOpen={this.state.modal} toggle={this.toggle} className= {this.props.className}>
              <ModalHeader toggle={this.toggle}>Add Item</ModalHeader>
              <Form onSubmit={this.onSubmit}>
                <FormGroup>
                    <Col >
                        <Label for="exampleText"></Label>
                            <Input
                                onChange={this.onChange}
                                placeholder='Add Item'
                                name='name' />
                    </Col>
                    <Button 
                      color = "dark"
                      style = {{margin:'2rem 2rem'}}
                      >Send</Button>
	            </FormGroup>
              </Form>
            </Modal>
          </div>
        );
      }

      
}

const mapStateToProps = state=> ({
    item: state.item
});
export default connect(mapStateToProps,{addItem})(ItemModal);