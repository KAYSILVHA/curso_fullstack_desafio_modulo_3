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
                        className={`nav-link ${selected === "/coffee" ? "selected" : ""}`}
                        to="/coffee"
                        onClick={() => handleItemClick("/coffee")}
                    >
                        <i className="fa fa-coffee mr-2"></i>
                        Café
                    </Link>
                </NavItem>
                <NavItem className="nav-item">
                    <Link
                        className={`nav-link ${selected === "/juices" ? "selected" : ""}`}
                        to="/juices"
                        onClick={() => handleItemClick("/juices")}
                    >
                        <i className="fa fa-glass mr-2"></i>
                        Refrescos
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
                <NavItem className="nav-item">
                    <Link
                        className={`nav-link ${selected === "/salty" ? "selected" : ""}`}
                        to="/salty"
                        onClick={() => handleItemClick("/salty")}
                    >
                        <i className="fa fa-bacon mr-2"></i>
                        Salgados
                    </Link>
                </NavItem>
                <NavItem className="nav-item">
                    <Link
                        className={`nav-link ${selected === "/breackfast" ? "selected" : ""}`}
                        to="/breackfast"
                        onClick={() => handleItemClick("/breackfast")}
                    >
                        <i className="fa fa-bread-slice mr-2"></i>
                        Café da Manhã
                    </Link>
                </NavItem>
                <NavItem className="nav-item">
                    <Link
                        className={`nav-link ${selected === "/lunch" ? "selected" : ""}`}
                        to="/lunch"
                        onClick={() => handleItemClick("/lunch")}
                    >
                        <i className="fa-solid fa-utensils mr-2"></i>
                        Almoço
                    </Link>
                </NavItem>
                <NavItem className="nav-item">
                    <Link
                        className={`nav-link ${selected === "/dinner" ? "selected" : ""}`}
                        to="/dinner"
                        onClick={() => handleItemClick("/dinner")}
                    >
                        <i className="fa fa-drumstick-bite mr-2"></i>
                        Jantar
                    </Link>
                </NavItem>
            </Nav>
        </div>
    );
};

export default Sidebar;
