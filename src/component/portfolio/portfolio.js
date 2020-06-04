import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class Portfolio extends Component {

    render() {
        return (
            <div className="App">
                
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
                    <Navbar.Brand href="http://localhost:3000">Logo</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">                                      
                    </Nav>

                    <Nav>
                    <Nav.Link href="http://localhost:3000/home" style={{color:"#ece7e7"}}>Home</Nav.Link>   
                    <Nav.Link href="http://localhost:3000/portfolio" style={{color:"#ece7e7"}}>Portfolio</Nav.Link>
                    <Nav.Link href="http://localhost:3000/about" style={{color:"#ece7e7"}}>Skills</Nav.Link>
                    <Nav.Link href="http://localhost:3000/contact" style={{color:"#ece7e7"}}>Contact</Nav.Link>
                   
                    </Nav>
                    </Navbar.Collapse>
                </Navbar> 

                <header className="App-header">
                    
                </header>
            </div>
        );
    }
}

export default Portfolio;