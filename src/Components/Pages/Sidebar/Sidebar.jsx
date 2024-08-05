import React, { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import "./assets/style/style.scss";
import { Nav, NavItem } from "reactstrap";

import 'font-awesome/css/font-awesome.min.css';

const Sidebar = () => {
    const location = useLocation();
    const [selected, setSelected] = useState(location.pathname || "/home");

    useEffect(() => {
        setSelected(location.pathname);
    }, [location.pathname]);

    const handleItemClick = (path) => {
        setSelected(path);
    };

    return (
        <div className="sidebar">
            <Nav className="d-flex flex-column nav-bar">
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
        </div>
    );
};

export default Sidebar;
