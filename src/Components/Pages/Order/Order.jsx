import React, { useState, useEffect } from 'react';
import "./assets/style/style.scss"

const Order = () => {
    const [dishName, setDishName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');
    const [specialRequests, setSpecialRequests] = useState('');
    const [orders, setOrders] = useState([]);

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

        setOrders([...orders, newOrder]);

        setDishName('');
        setQuantity('');
        setPaymentMethod('');
        setSpecialRequests('');
    };

    return (
        <div className="content">
            <div className="container-fluid div-container">
                <h1>Cadastro de Pedidos</h1>
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
                    <button type="submit">Adicionar Pedido</button>
                </form>
                <div className="order-list">
                    <h2>Lista de Pedidos</h2>
                    <ul>
                        {orders.map((order) => (
                            <li key={order.id}>
                                <h3>{order.dishName}</h3>
                                <p>Quantidade: {order.quantity}</p>
                                <p>Forma de Pagamento: {order.paymentMethod}</p>
                                <p>Pedidos Especiais: {order.specialRequests}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Order;