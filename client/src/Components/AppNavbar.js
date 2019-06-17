import React, {Component,Fragment} from 'react';
import {
    Collapse,
    Container,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';
    import RegisterModal from './auth/RegisterModal';
import Logout from './auth/Logout';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import LoginModal from './auth/LoginModal';


class AppNavbar extends Component{

    static propTypes = {
        auth: PropTypes.object.isRequired
    }

    state = {
        isOpen:false
    }

    toggle = () =>{
        this.setState({isOpen:!this.isOpen});

    }


    render(){
        const {isAuthenticated,user} = this.props.auth;
        const authLinks =(
            <Fragment>
                <NavItem>
                    <span className='navbar-text mr-3'>
                        <strong>
                            {user? `welcom ${user.name}`:''}
                        </strong>
                    </span>
                </NavItem>
                <NavItem>
                    <Logout/>
                </NavItem>
            </Fragment>
        )
        const guestLinks =(
            <Fragment>
                <NavItem>
                    <RegisterModal/>
                </NavItem>
                <NavItem>
                    <LoginModal/>
                </NavItem>
            </Fragment>
        )
        return (
            <div>
            <Navbar color="dark"   expand="sm" className="mn-5" >
                <Container>
                    <NavbarBrand href="/">Shopping List </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} > </NavbarToggler>
                    <Collapse isOpen={this.state.isOpen} navbar> 
                        <Nav className="ml-auto" navbar >
                            {isAuthenticated? authLinks : guestLinks}
                        </Nav>
                     </Collapse>
                </Container>
            </Navbar>
        </div>
    );
        
    }
}

const mapStateToProps = state=> ({
    auth:state.auth
});


export default connect(mapStateToProps,null)(AppNavbar);