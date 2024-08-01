import React, { useState, useEffect } from 'react';
import './assets/style/style.scss';

const Order = () => {
    const [dishName, setDishName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');
    const [specialRequests, setSpecialRequests] = useState('');
    const [orders, setOrders] = useState([]);
    const [editOrder, setEditOrder] = useState(null);

    useEffect(() => {
        const savedOrders = JSON.parse(localStorage.getItem('orders')) || [];
        setOrders(savedOrders);
    }, []);

    useEffect(() => {
        localStorage.setItem('orders', JSON.stringify(orders));
    }, [orders]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const newOrder = {
            dishName,
            quantity,
            paymentMethod,
            specialRequests,
            id: Date.now()
        };

        if (editOrder) {
            setOrders(orders.map(order =>
                order.id === editOrder.id ? newOrder : order
            ));
            setEditOrder(null);
        } else {
            setOrders([...orders, newOrder]);
        }

        setDishName('');
        setQuantity('');
        setPaymentMethod('');
        setSpecialRequests('');
    };

    const handleEdit = (order) => {
        setDishName(order.dishName);
        setQuantity(order.quantity);
        setPaymentMethod(order.paymentMethod);
        setSpecialRequests(order.specialRequests);
        setEditOrder(order);
    };

    const handleDelete = (id) => {
        setOrders(orders.filter(order => order.id !== id));
    };

    return (
        <div className="content">
            <div className="container-fluid div-container">
                <h1>{editOrder ? 'Editar Pedido' : 'Cadastro de Pedidos'}</h1>
                <form className="order-form" onSubmit={handleSubmit}>
                    <label>
                        Nome do Prato:
                        <input
                            type="text"
                            value={dishName}
                            onChange={(e) => setDishName(e.target.value)}
                            required
                        />
                    </label>
                    <label>
                        Quantidade:
                        <input
                            type="number"
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                            required
                        />
                    </label>
                    <label>
                        Forma de Pagamento:
                        <select
                            value={paymentMethod}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                            required
                        >
                            <option value="">Selecione</option>
                            <option value="cartao">Cartão</option>
                            <option value="dinheiro">Dinheiro</option>
                        </select>
                    </label>
                    <label>
                        Pedidos Especiais:
                        <textarea
                            value={specialRequests}
                            onChange={(e) => setSpecialRequests(e.target.value)}
                        />
                    </label>
                    <button type="submit">{editOrder ? 'Atualizar Pedido' : 'Adicionar Pedido'}</button>
                    {editOrder && (
                        <button type="button" onClick={() => setEditOrder(null)} className="cancel-button">Cancelar</button>
                    )}
                </form>
                <div className="order-list">
                    <h2>Lista de Pedidos</h2>
                    <div className="order-cards">
                        {orders.map((order) => (
                            <div className="order-card" key={order.id}>
                                <h3>{order.dishName}</h3>
                                <p><strong>Quantidade:</strong> {order.quantity}</p>
                                <p><strong>Forma de Pagamento:</strong> {order.paymentMethod}</p>
                                <p><strong>Pedidos Especiais:</strong> {order.specialRequests}</p>
                                <button onClick={() => handleEdit(order)} className="edit-button">Editar</button>
                                <button onClick={() => handleDelete(order.id)} className="delete-button">Excluir</button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Order;
