import React, { useState } from 'react';
import "./assets/style/style.scss"
import { Collapse, FormGroup, Input, InputGroup, InputGroupText, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem } from 'reactstrap';
import Teste from "../../../assets/images/favicon.png"
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);


    return (
        <>
            <div className='header border'>
                <div className="container-fluid div-container d-flex justify-content-between align-items-center">
                    <Navbar color="dark" dark expand="none" className='d-lg-none d-flex'>
                        <NavbarToggler onClick={toggle} />
                        <Collapse isOpen={isOpen} navbar>
                            <Nav className="mr-auto" navbar>
                                <NavItem>
                                    <NavLink href="#">Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#">Sobre</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#">Serviços</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#">Contato</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>
                    <div className="logo d-flex align-items-center">
                        <img src={Teste} alt="Teste" />
                        Ohayo
                    </div>
                    <InputGroup className='input-search'>
                        <Input type="text" placeholder="Pesquisa..." />
                        <InputGroupText className='rounded-start'>
                            <i className='fa fa-search'></i>
                        </InputGroupText>
                    </InputGroup>
                </div>
            </div>
        </>

    )
};

export default Header;