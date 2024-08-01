import React, { useState, useEffect } from 'react';
import './assets/style/style.scss';

const options = {
    cafe: [
        { name: 'Café Expresso', img: 'link_para_imagem' },
        { name: 'Café com Leite', img: 'link_para_imagem' }
    ],
    refrescos: [
        { name: 'Suco de Laranja', img: 'link_para_imagem' },
        { name: 'Refrigerante', img: 'link_para_imagem' }
    ],
    doces: [
        { name: 'Bolo de Chocolate', img: 'link_para_imagem' },
        { name: 'Brigadeiro', img: 'link_para_imagem' }
    ],
    salgados: [
        { name: 'Coxinha', img: 'link_para_imagem' },
        { name: 'Empada', img: 'link_para_imagem' }
    ],
    almoco: [
        { name: 'Arroz e Feijão', img: 'link_para_imagem' },
        { name: 'Lasanha', img: 'link_para_imagem' }
    ],
    jantar: [
        { name: 'Pizza', img: 'link_para_imagem' },
        { name: 'Hambúrguer', img: 'link_para_imagem' }
    ],
    cafe_da_manha: [
        { name: 'Pão com Manteiga', img: 'link_para_imagem' },
        { name: 'Torrada', img: 'link_para_imagem' }
    ]
};

const Order = () => {
    const [dishName, setDishName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');
    const [specialRequests, setSpecialRequests] = useState('');
    const [orders, setOrders] = useState([]);
    const [editOrder, setEditOrder] = useState(null);
    const [topic, setTopic] = useState('');
    const [filteredOptions, setFilteredOptions] = useState([]);

    useEffect(() => {
        const savedOrders = JSON.parse(localStorage.getItem('orders')) || [];
        setOrders(savedOrders);
    }, []);

    useEffect(() => {
        localStorage.setItem('orders', JSON.stringify(orders));
    }, [orders]);

    useEffect(() => {
        setFilteredOptions(options[topic] || []);
    }, [topic]);

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
        setTopic('');
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
                        Tópico:
                        <select
                            value={topic}
                            onChange={(e) => setTopic(e.target.value)}
                            required
                        >
                            <option value="">Selecione um tópico</option>
                            <option value="cafe">Café</option>
                            <option value="refrescos">Refrescos</option>
                            <option value="doces">Doces</option>
                            <option value="salgados">Salgados</option>
                            <option value="almoco">Almoço</option>
                            <option value="jantar">Jantar</option>
                            <option value="cafe_da_manha">Café da Manhã</option>
                        </select>
                    </label>
                    <label>
                        Nome do Prato:
                        <select
                            value={dishName}
                            onChange={(e) => setDishName(e.target.value)}
                            required
                        >
                            <option value="">Selecione um prato</option>
                            {filteredOptions.map((option, index) => (
                                <option key={index} value={option.name}>
                                    {option.name}
                                </option>
                            ))}
                        </select>
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
