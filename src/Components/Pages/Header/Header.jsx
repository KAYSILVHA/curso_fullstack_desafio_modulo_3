import React from 'react';
import "./assets/style/style.scss"
import { FormGroup, Input, InputGroup, InputGroupText } from 'reactstrap';
import Teste from "../../../assets/images/favicon.png"
const Header = () => {
    return (
        <div className='header border'>
            <div className="container-fluid div-container d-flex justify-content-between align-items-center">
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
    )
};

export default Header;