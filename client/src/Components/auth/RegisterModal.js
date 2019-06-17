import React from 'react';
import { Form, Button, Modal, ModalHeader,Alert, Col,Label,Input,FormGroup,NavLink } from 'reactstrap';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {register} from '../../actions/authActions';
import {clearErrors} from '../../actions/errorActions';
class RegisterModal extends React.Component {

    state = {
        modal: false,
        name:'',
        email:'',
        password: '',
        msg:null
      };

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        register: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired
    };

    componentDidUpdate(prevProps){
        const {error} = this.props;
        if (error !== prevProps.error){
            if(error.id === 'REGISTER_FAIL'){
                this.setState({msg: error.msg.msg});
            }else{
                this.setState({msg:null});
            } 
        }
        const {isAuthenticated} = this.props;
        if(this.state.modal){
            if(isAuthenticated){
                this.toggle();
            }
        }
    }
    
    onSubmit = (e)=>{
      e.preventDefault();
      const {name,email,password} = this.state;
      //create user 

      const newUser = {
          name,
          email,
          password,
      };

      //attempt to register
      this.props.register(newUser);

      
    };
    onChange = (e)=>{
      this.setState({[e.target.name]:e.target.value})
    };

    toggle = ()=>{
        this.props.clearErrors();
        this.setState({
            modal: !this.state.modal
        })   
     };

     render() {
        return (
          <div>
            
            <NavLink onClick={this.toggle} href='#'>
                Register
            </NavLink>

            <Modal isOpen={this.state.modal} toggle={this.toggle} className= {this.props.className}>
              <ModalHeader toggle={this.toggle}>Register</ModalHeader>
              {this.state.msg? <Alert color='danger'>{this.state.msg}</Alert>: null}
              <Form onSubmit={this.onSubmit}>
                <FormGroup>
                    <Col >
                        <Label for="name"></Label>
                            <Input
                                onChange={this.onChange}
                                placeholder='Name'
                                name='name'
                                id='name'
                                
                                 />
                        <Label for="email"></Label>
                            <Input
                                onChange={this.onChange}
                                placeholder='Email'
                                name='email'
                                type='email'
                                id='email'
                                
                                 />
                        <Label for="password"></Label>
                            <Input
                                onChange={this.onChange}
                                placeholder='Password'
                                name='password'
                                id='password'
                                type='password'
                                 />
                    </Col>
                    <Button 
                      color = "dark"
                      style = {{margin:'2rem 2rem'}}
                      >Register</Button>
	            </FormGroup>
              </Form>
            </Modal>
          </div>
        );
      }

      
}

const mapStateToProps = state=> ({
    isAuthenticated:state.auth.isAuthenticated,
    error:state.error
});
export default connect(mapStateToProps,{register,clearErrors})(RegisterModal);