import React, { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import "./assets/style/style.scss"

import { Collapse, FormGroup, Input, InputGroup, InputGroupText, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem } from 'reactstrap';
import Teste from "../../../assets/images/favicon.png"

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const [selected, setSelected] = useState(location.pathname || "/home");

    const handleItemClick = (path) => {
        setSelected(path);
    };

    const toggle = () => setIsOpen(!isOpen);

    useEffect(() => {
        setSelected(location.pathname);
    }, [location.pathname]);

    return (
        <>
            <div className='header border'>
                <Navbar expand="none" className='d-lg-none d-flex nav-bar p-0'>
                    <button onClick={toggle} class="navbar-toggler" type="button" data-toggle="collapse" aria-expanded="false">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto mt-2 nav" navbar>
                            <NavItem className="nav-item">
                                <Link
                                    className={`nav-link ${selected === "/home" ? "selected" : ""}`}
                                    to="/home"
                                    onClick={() => handleItemClick("/home")}
                                >
                                    <i className="fa fa-home mr-2"></i>
                                    Menu
                                </Link>
                            </NavItem>
                            <NavItem className="nav-item">
                                <Link
                                    className={`nav-link ${selected === "/order" ? "selected" : ""}`}
                                    to="/order"
                                    onClick={() => handleItemClick("/order")}
                                >
                                    <i className="fa fa-shopping-cart mr-2"></i>
                                    Pedidos
                                </Link>
                            </NavItem>
                            <NavItem className="nav-item">
                                <Link
                                    className={`nav-link ${selected === "/candys" ? "selected" : ""}`}
                                    to="/candys"
                                    onClick={() => handleItemClick("/candys")}
                                >
                                    <i className="fa fa-candy-cane mr-2"></i>
                                    Doces
                                </Link>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
                <div className="container-fluid div-container d-flex justify-content-between align-items-center mt-3">
                    <div className="logo d-flex align-items-center">
                        <img src={Teste} alt="Teste" />
                        Ohayo
                    </div>
                    <InputGroup className='input-search'>
                        <Input type="text" placeholder="Pesquisa..." />
                        <InputGroupText className='group-text'>
                            <i className='fa fa-search'></i>
                        </InputGroupText>
                    </InputGroup>
                </div>
            </div>
        </>

    )
};

export default Header;