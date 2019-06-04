import React, {Component} from 'react';
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
    DropdownItem } from 'reactstrap'


class AppNavbar extends Component{

    state = {
        isOpen:false
    }

    toggle = () =>{
        this.setState({isOpen:!this.isOpen});

    }


    render(){
        return (
            <div>
            <Navbar color="dark"   expand="sm" className="mn-5" >
                <Container>
                    <NavbarBrand href="/">Shopping List </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} > </NavbarToggler>
                    <Collapse isOpen={this.state.isOpen} navbar> 
                        <Nav className="ml-auto" navbar >
                            <NavItem>
                                <NavLink href="https://github.com/idopo">
                                    github
                                </NavLink>
                            </NavItem>
                        </Nav>
                     </Collapse>
                </Container>
            </Navbar>
        </div>
    );
        
    }
}



export default AppNavbar;