import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from '../../Layout';
import Coffee from '../Pages/Coffee/Coffee';
import Candys from '../Pages/Candys/Candys';
import Juices from '../Pages/Juice/Juice';
import Dinner from '../Pages/Meals/Dinner/Dinner';
import Breackfast from '../Pages/Meals/Breakfast/Breakfast';
import Salty from '../Pages/Salty/Salty';
import Lunch from '../Pages/Meals/Lunch/Lunch';
import Order from '../Pages/Order/Order';
import Home from '../Pages/Home/Home';

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="/" element={<Layout />}>
                    <Route path="home" element={<Home />} />
                    <Route path="order" element={<Order />} />
                    <Route path="coffee" element={<Coffee />} />
                    <Route path="juices" element={<Juices />} />
                    <Route path="dinner" element={<Dinner />} />
                    <Route path="lunch" element={<Lunch />} />
                    <Route path="breackfast" element={<Breackfast />} />
                    <Route path="salty" element={<Salty />} />
                    <Route path="candys" element={<Candys />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
