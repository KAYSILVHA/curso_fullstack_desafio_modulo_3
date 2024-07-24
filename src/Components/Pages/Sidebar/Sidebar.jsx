import { Link } from "react-router-dom";
import "./assets/style/style.scss"
import { Nav, NavItem } from "reactstrap";

const Sidebar = () => {
    return (
        <>
            <Nav className="d-flex flex-column">
                <NavItem className="">
                    <Link to="/order">Pedidos</Link>
                </NavItem>
                <NavItem className="">
                    <Link to="/coffee">Café</Link>
                </NavItem>
                <NavItem className="">
                    <li className="">
                        <Link to="/juices">Refrescos</Link>
                    </li>
                </NavItem>
                <NavItem className="">
                    <li className="">
                        <Link to="/candys">Doces</Link>
                    </li>
                </NavItem>
                <NavItem className="">
                    <li className="">
                        <Link to="/salty">Salgados</Link>
                    </li>
                </NavItem>
                <NavItem className="">
                    <li className="">
                        <Link to="/breackfast">Café da Manhã</Link>
                    </li>
                </NavItem>
                <NavItem className="">
                    <li className="">
                        <Link to="/lunch">Almoço</Link>
                    </li>
                </NavItem>
                <NavItem className="">
                    <li className="">
                        <Link to="/dinner">Jantar</Link>
                    </li>
                </NavItem>

            </Nav>
        </>
    )
};

export default Sidebar;