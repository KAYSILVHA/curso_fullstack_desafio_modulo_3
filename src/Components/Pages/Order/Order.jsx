import React, { useState, useEffect } from 'react';
import { Container, Button, ListGroup, ListGroupItem, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import "./assets/style/style.scss";

const Order = () => {
    const [orders, setOrders] = useState([]);
    const [modal, setModal] = useState(false);
    const [buyerInfo, setBuyerInfo] = useState({ name: '', address: '', phone: '' });

    useEffect(() => {
        const savedOrders = JSON.parse(localStorage.getItem('orders')) || [];
        setOrders(savedOrders);
    }, []);

    const handlePurchase = () => {
        // Aqui você pode adicionar a lógica para processar a compra
        localStorage.removeItem('orders');
        setOrders([]);
        setModal(false);
        alert('Agradecemos seu pedido!');
    };

    const toggleModal = () => setModal(!modal);

    return (
        <Container>
            <h1 className="text-center my-5">Lista de Pedidos</h1>
            <ListGroup>
                {orders.map((order, index) => (
                    <ListGroupItem key={index}>
                        <h5>{order.name}</h5>
                        <p>{order.description}</p>
                    </ListGroupItem>
                ))}
            </ListGroup>
            {orders.length > 0 && (
                <div className="text-center mt-5">
                    <Button color="success" onClick={toggleModal}>Comprar</Button>
                </div>
            )}
            <Modal isOpen={modal} toggle={toggleModal}>
                <ModalHeader toggle={toggleModal}>Informações do Comprador</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="name">Nome</Label>
                            <Input type="text" id="name" value={buyerInfo.name} onChange={(e) => setBuyerInfo({ ...buyerInfo, name: e.target.value })} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="address">Endereço</Label>
                            <Input type="text" id="address" value={buyerInfo.address} onChange={(e) => setBuyerInfo({ ...buyerInfo, address: e.target.value })} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="phone">Telefone</Label>
                            <Input type="text" id="phone" value={buyerInfo.phone} onChange={(e) => setBuyerInfo({ ...buyerInfo, phone: e.target.value })} />
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={handlePurchase}>Finalizar Compra</Button>
                    <Button color="secondary" onClick={toggleModal}>Cancelar</Button>
                </ModalFooter>
            </Modal>
        </Container>
    );
};

export default Order;
