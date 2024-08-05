import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardTitle, CardText, Button, Container, Row, Col } from 'reactstrap';
import "./assets/style/style.scss";
import { useNavigate } from 'react-router-dom';

const sweets = [
    { name: 'Bolo de Chocolate', img: './assets/images/bolo-de-chocolate.jpg', description: 'Delicioso bolo de chocolate.' },
    { name: 'Brigadeiro', img: './assets/images/brigadeiro.jpg', description: 'Brigadeiro gourmet.' },
    // Adicione mais opções aqui...
];

const Candys = () => {
    const navigate = useNavigate();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const savedOrders = JSON.parse(localStorage.getItem('orders')) || [];
        setOrders(savedOrders);
    }, []);

    const handleAddToOrder = (sweet) => {
        const newOrder = [...orders, { ...sweet, id: Date.now() }];
        setOrders(newOrder);
        localStorage.setItem('orders', JSON.stringify(newOrder));
    };

    const goToOrderPage = () => {
        navigate('/order');
    };

    return (
        <Container>
            <div className='content'>
                <div className="container-fluid div-container">

                    <h1 className="text-center my-5">Venda de Doces</h1>
                    <Row>
                        {sweets.map((sweet, index) => (
                            <Col md="4" className="mb-4" key={index}>
                                <Card>
                                    <img src={sweet.img} alt={sweet.name} className="card-img-top" />
                                    <CardBody>
                                        <CardTitle tag="h5">{sweet.name}</CardTitle>
                                        <CardText>{sweet.description}</CardText>
                                        <Button color="primary" onClick={() => handleAddToOrder(sweet)}>Adicionar aos Pedidos</Button>
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
