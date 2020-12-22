import { Component } from 'react';
import { Jumbotron, Navbar, NavbarBrand, Nav, NavItem, Collapse, NavbarToggler } from 'reactstrap';
import { NavLink } from "react-router-dom";

class Header extends Component{

    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false
        }

        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
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
                </>
        )
    }
}

export default Header;