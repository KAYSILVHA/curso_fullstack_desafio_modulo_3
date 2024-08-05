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

    const getTotal = () => {
        return orders.reduce((total, order) => total + (order.price || 0) * (order.quantity || 1), 0);
    };

    return (
        <Container>
            <div className='content'>
                <div className="container-fluid div-container">
                    <h1 className="text-center my-5">Lista de Pedidos</h1>
                    <ListGroup>
                        {orders.map((order, index) => (
                            <ListGroupItem key={index}>
                                <div className="d-flex align-items-center">
                                    <img src={order.img} alt={order.name} style={{ width: '100px', height: 'auto', marginRight: '15px' }} />
                                    <div>
                                        <h5>{order.name}</h5>
                                        <p>{order.description}</p>
                                        <p>Quantidade: {order.quantity || 1}</p>
                                        <p>Preço: R$ {(order.price || 0).toFixed(2)}</p>
                                        <p>Total: R$ {((order.price || 0) * (order.quantity || 1)).toFixed(2)}</p>
                                        <Button color="warning" onClick={() => handleEdit(order)}>Editar</Button>
                                        <Button color="danger" onClick={() => handleDelete(order.id)}>Excluir</Button>
                                    </div>
                                </div>
                            </ListGroupItem>
                        ))}
                    </ListGroup>
                    {orders.length > 0 && (
                        <div className="text-center mt-5">
                            <h3>Total do Pedido: R$ {getTotal().toFixed(2)}</h3>
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
                                    <Label for="quantity">Quantidade</Label>
                                    <Input
                                        type="number"
                                        id="quantity"
                                        value={currentOrder?.quantity || 1}
                                        min="1"
                                        onChange={(e) => setCurrentOrder({ ...currentOrder, quantity: parseInt(e.target.value, 10) })}
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
