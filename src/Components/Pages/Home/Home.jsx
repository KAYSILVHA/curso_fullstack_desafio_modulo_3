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
                    <h5>Eai! Vamos escolher o que hoje?</h5>
                    <div class="d-flex flex-lg-row flex-column cards">
                        <div class="card">Bebidas</div>
                        <div class="card">Doces</div>
                        <div class="card">Salgados</div>
                        <div class="card">Refeições</div>
                        <div class="card">Combos</div>
                    </div>
                </div>

                <div className="container-bests">
                    <h5>Populares</h5>
                    <div className="d-flex flex-column bests">
                        <div class="card"></div>
                        <div class="card"></div>
                        <div class="card"></div>
                        <div class="card"></div>
                        <div class="card"></div>
                    </div>
                </div>

                <div className="container-feedbacks">
                    <h5>Feedbacks</h5>
                    <div className="feedbacks d-flex flex-lg-row flex-column">
                        <div class="card"></div>
                        <div class="card"></div>
                        <div class="card"></div>
                        <div class="card"></div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Home;