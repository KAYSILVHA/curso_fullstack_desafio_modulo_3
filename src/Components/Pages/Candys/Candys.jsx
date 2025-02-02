import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardTitle, CardText, Button, Container, Row, Col, Input } from 'reactstrap';
import "./assets/style/style.scss";
import { useNavigate } from 'react-router-dom';

import BoloChocolate from "./assets/images/bolo-de-chocolate.jpg";
import Brigadeiro from "./assets/images/brigadeiro.jpg";
import Beijinho from "./assets/images/Beijinho.jpg";
import Pipoca from "./assets/images/Pipoca.jpg";
import Ddonuts from "./assets/images/d-donuts.jpg";

const initialSweets = [
    { name: 'Bolo de Chocolate', img: BoloChocolate, description: 'Delicioso bolo de chocolate.' },
    { name: 'Brigadeiro', img: Brigadeiro, description: 'Brigadeiro gourmet.' },
    { name: 'Beijinho', img: Beijinho, description: 'Beijinho .' },
    { name: 'Pipoca', img: Pipoca, description: 'Pipoca de Cinema .' },
    { name: 'Ddonuts', img: Ddonuts, description: 'Ddonuts Gourmet .' },
];

const Candys = () => {
    const navigate = useNavigate();
    const [sweets, setSweets] = useState(initialSweets);
    const [orders, setOrders] = useState([]);
    const [quantities, setQuantities] = useState({});

    useEffect(() => {
        const savedOrders = JSON.parse(localStorage.getItem('orders')) || [];
        setOrders(savedOrders);
    }, []);

    const handleAddToOrder = (index) => {
        const newSweets = [...sweets];
        const sweet = newSweets[index];
        const quantity = quantities[sweet.name] || 1;

        if (!sweet.added) {
            const newOrder = [...orders, { ...sweet, id: Date.now(), quantity }];
            setOrders(newOrder);
            localStorage.setItem('orders', JSON.stringify(newOrder));

            newSweets[index] = { ...sweet, added: true };
            setSweets(newSweets);
        }
    };

    const handleQuantityChange = (e, sweetName) => {
        const value = parseInt(e.target.value, 10) || 1;
        setQuantities({ ...quantities, [sweetName]: value });
    };

    const goToOrderPage = () => {
        navigate('/order');
    };

    return (
        <Container>
            <div className='content'>
                <div className="div-container">
                    <h1 className="text-center">Venda de Doces</h1>
                    <Row>
                        {sweets.map((sweet, index) => (
                            <Col md="4" className="mb-4 d-flex align-items-stretch col-12 justify-content-center" key={index}>
                                <Card className='card'>
                                    <img src={sweet.img} alt={sweet.name} className="card-img-top" />
                                    <CardBody>
                                        <CardTitle tag="h5">{sweet.name}</CardTitle>
                                        <CardText>{sweet.description}</CardText>
                                        <CardText>Preço: R$ {isNaN(sweet.price) ? 'Preço não disponível' : sweet.price.toFixed(2)}</CardText>
                                        <div className='d-flex'>
                                            <Input
                                                type="number"
                                                min="1"
                                                defaultValue="1"
                                                onChange={(e) => handleQuantityChange(e, sweet.name)}
                                                className='mr-2'
                                            />
                                            <Button
                                                color={sweet.added ? 'secondary' : 'primary'}
                                                onClick={() => handleAddToOrder(index)}
                                                disabled={sweet.added}
                                            >
                                                {sweet.added ? 'Adicionado' : 'Adicionar'}
                                            </Button>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                    <div className="text-center">
                        <Button color="success" onClick={goToOrderPage}>Ver Pedidos</Button>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Candys;
