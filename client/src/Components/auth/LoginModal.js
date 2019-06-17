import React from 'react';
import { Form, Button, Modal, ModalHeader,Alert, Col,Label,Input,FormGroup,NavLink } from 'reactstrap';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {login} from '../../actions/authActions';
import {clearErrors} from '../../actions/errorActions';
class LoginrModal extends React.Component {

    state = {
        modal: false,
        email:'',
        password: '',
        msg:null
      };

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        login: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired
    };

    componentDidUpdate(prevProps){
        const {error} = this.props;
        if (error !== prevProps.error){
            if(error.id === 'LOGIN_FAIL'){
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
      const {email,password} = this.state;

      const user = {
        email,
        password
      };

      //attempt to login
      this.props.login(user);
      
      
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
                Login
            </NavLink>

            <Modal isOpen={this.state.modal} toggle={this.toggle} className= {this.props.className}>
              <ModalHeader toggle={this.toggle}>Login</ModalHeader>
              {this.state.msg? <Alert color='danger'>{this.state.msg}</Alert>: null}
              <Form onSubmit={this.onSubmit}>
                <FormGroup>
                    <Col >
                        
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
                      >Login</Button>
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
export default connect(mapStateToProps,{login,clearErrors})(LoginrModal);