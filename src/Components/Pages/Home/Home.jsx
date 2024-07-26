import React from 'react';
import "./assets/style/style.scss"

const Home = () => {
    
    return (
        <div className='content'>
            <div className="container-fluid div-container">
                <div className='home-title'>
                    <h3>Olá</h3>
                    <h4>Bem vindo(a)!</h4>
                </div>
                <div className='container-card'>
                    <div class="card-slider d-flex">
                        <div class="card">Card 1</div>
                        <div class="card">Card 2</div>
                        <div class="card">Card 3</div>
                        <div class="card">Card 4</div>
                        <div class="card">Card 5</div>
                        <div class="card">Card 6</div>
                        <div class="card">Card 7</div>
                        <div class="card">Card 8</div>
                        <div class="card">Card 9</div>
                        <div class="card">Card 10</div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Home;