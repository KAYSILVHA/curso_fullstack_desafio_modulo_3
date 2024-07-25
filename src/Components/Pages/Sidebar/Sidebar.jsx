import React, { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import "./assets/style/style.scss";
import { Nav, NavItem } from "reactstrap";

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
                        Menu Principal
                    </Link>
                </NavItem>
                <NavItem className="nav-item">
                    <Link
                        className={`nav-link ${selected === "/order" ? "selected" : ""}`}
                        to="/order"
                        onClick={() => handleItemClick("/order")}
                    >
                        Pedidos
                    </Link>
                </NavItem>
                <NavItem className="nav-item">
                    <Link
                        className={`nav-link ${selected === "/coffee" ? "selected" : ""}`}
                        to="/coffee"
                        onClick={() => handleItemClick("/coffee")}
                    >
                        Café
                    </Link>
                </NavItem>
                <NavItem className="nav-item">
                    <Link
                        className={`nav-link ${selected === "/juices" ? "selected" : ""}`}
                        to="/juices"
                        onClick={() => handleItemClick("/juices")}
                    >
                        Refrescos
                    </Link>
                </NavItem>
                <NavItem className="nav-item">
                    <Link
                        className={`nav-link ${selected === "/candys" ? "selected" : ""}`}
                        to="/candys"
                        onClick={() => handleItemClick("/candys")}
                    >
                        Doces
                    </Link>
                </NavItem>
                <NavItem className="nav-item">
                    <Link
                        className={`nav-link ${selected === "/salty" ? "selected" : ""}`}
                        to="/salty"
                        onClick={() => handleItemClick("/salty")}
                    >
                        Salgados
                    </Link>
                </NavItem>
                <NavItem className="nav-item">
                    <Link
                        className={`nav-link ${selected === "/breackfast" ? "selected" : ""}`}
                        to="/breackfast"
                        onClick={() => handleItemClick("/breackfast")}
                    >
                        Café da Manhã
                    </Link>
                </NavItem>
                <NavItem className="nav-item">
                    <Link
                        className={`nav-link ${selected === "/lunch" ? "selected" : ""}`}
                        to="/lunch"
                        onClick={() => handleItemClick("/lunch")}
                    >
                        Almoço
                    </Link>
                </NavItem>
                <NavItem className="nav-item">
                    <Link
                        className={`nav-link ${selected === "/dinner" ? "selected" : ""}`}
                        to="/dinner"
                        onClick={() => handleItemClick("/dinner")}
                    >
                        Jantar
                    </Link>
                </NavItem>
            </Nav>
        </div>
    );
};

export default Sidebar;
