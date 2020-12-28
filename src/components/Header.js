import { Component } from 'react';
import { Jumbotron, Navbar, NavbarBrand, Nav, NavItem, Collapse, NavbarToggler,Modal, ModalHeader, ModalBody, Button, FormGroup, Form, Label, Input } from 'reactstrap';
import { NavLink } from "react-router-dom";

class Header extends Component{

    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false,
            isModalOpen: false
        }

        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleLogin(event) {
        this.toggleModal();
        alert("Username: " + this.username.value + " Password: " + this.password.value + " Remember: " + this.remember.value);
        event.preventDefault();
    }

    render() {
        return (
            <>
            <Navbar className="navbar-dark bg-dark" expand="md">
                    <div className="container">
                        <NavbarBrand href="/">Demo</NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} />

                        <Collapse navbar isOpen={this.state.isNavOpen}>
                        <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link" to="/">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/skills">Skills</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/about">About</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/contact">Contact</NavLink>
                            </NavItem>
                            </Nav>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <Button outline color="light" onClick={this.toggleModal}>
                                        <span className="fa fa-sign-in fa-lg"></span> Login
                                    </Button>
                                </NavItem>
                            </Nav>
                            </Collapse>
                    </div>
            </Navbar>
            <Jumbotron className="x">
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Courses I have studied</h1>
                                <p>Online courses taken up from Coursera and Udemy</p>
                            </div>
                        </div>
                </div>
                </Jumbotron>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader>Login</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username"
                                    innerRef= {(input)=>this.username=input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Username</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef= {(input)=>this.password=input} />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember" 
                                    innerRef= {(input)=>this.remember=input} />
                                    Remember Me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Login</Button>
                        </Form>
                    </ModalBody>
                </Modal>
                </>
        )
    }
}

export default Header;