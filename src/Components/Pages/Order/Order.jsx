import React, { useState, useEffect } from 'react';
import { Container, Button, ListGroup, ListGroupItem, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import "./assets/style/style.scss";

const Order = () => {
    const [orders, setOrders] = useState([]);
    const [modal, setModal] = useState(false);
    const [editModal, setEditModal] = useState(false);
    const [currentOrder, setCurrentOrder] = useState(null);
    const [buyerInfo, setBuyerInfo] = useState({ name: '', address: '', phone: '' });

    useEffect(() => {
        const savedOrders = JSON.parse(localStorage.getItem('orders')) || [];
        setOrders(savedOrders);
    }, []);

    const handlePurchase = () => {
        localStorage.removeItem('orders');
        setOrders([]);
        setModal(false);
        alert('Agradecemos seu pedido!');
    };

    const toggleModal = () => setModal(!modal);
    const toggleEditModal = () => setEditModal(!editModal);

    const handleEdit = (order) => {
        setCurrentOrder(order);
        toggleEditModal();
    };

    const handleDelete = (orderId) => {
        const updatedOrders = orders.filter(order => order.id !== orderId);
        setOrders(updatedOrders);
        localStorage.setItem('orders', JSON.stringify(updatedOrders));
    };

    const handleSaveEdit = () => {
        const updatedOrders = orders.map(order =>
            order.id === currentOrder.id ? currentOrder : order
        );
        setOrders(updatedOrders);
        localStorage.setItem('orders', JSON.stringify(updatedOrders));
        toggleEditModal();
    };

    return (
        <Container>
            <div className='content'>
                <div className="container-fluid div-container">
                    <h1 className="text-center my-5">Lista de Pedidos</h1>
                    <ListGroup>
                        {orders.map((order, index) => (
                            <ListGroupItem key={index}>
                                <h5>{order.name}</h5>
                                <p>{order.description}</p>
                                <Button color="warning" onClick={() => handleEdit(order)}>Editar</Button>
                                <Button color="danger" onClick={() => handleDelete(order.id)}>Excluir</Button>
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

                    <Modal isOpen={editModal} toggle={toggleEditModal}>
                        <ModalHeader toggle={toggleEditModal}>Editar Pedido</ModalHeader>
                        <ModalBody>
                            <Form>
                                <FormGroup>
                                    <Label for="name">Nome</Label>
                                    <Input
                                        type="text"
                                        id="name"
                                        value={currentOrder?.name || ''}
                                        onChange={(e) => setCurrentOrder({ ...currentOrder, name: e.target.value })}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="description">Descrição</Label>
                                    <Input
                                        type="text"
                                        id="description"
                                        value={currentOrder?.description || ''}
                                        onChange={(e) => setCurrentOrder({ ...currentOrder, description: e.target.value })}
                                    />
                                </FormGroup>
                            </Form>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={handleSaveEdit}>Salvar</Button>
                            <Button color="secondary" onClick={toggleEditModal}>Cancelar</Button>
                        </ModalFooter>
                    </Modal>
                </div>
            </div>
        </Container>
    );
};

export default Order;
