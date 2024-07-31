import React from 'react';
import './assets/style/style.scss';
import { Carousel, CarouselItem, CarouselControl } from 'reactstrap';

const images = [
  'https://via.placeholder.com/800x400?text=Image+1',
  'https://via.placeholder.com/800x400?text=Image+2',
  'https://via.placeholder.com/800x400?text=Image+3',
  'https://via.placeholder.com/800x400?text=Image+4',
  'https://via.placeholder.com/800x400?text=Image+5',
  'https://via.placeholder.com/800x400?text=Image+6'
];

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === Math.ceil(images.length / 3) - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? Math.ceil(images.length / 3) - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = images.reduce((result, image, index) => {
      const chunkIndex = Math.floor(index / 3);
      if (!result[chunkIndex]) {
        result[chunkIndex] = []; 
      }
      result[chunkIndex].push(
        <div className="col-md-4" key={index}>
          <img className="d-block w-100" src={image} alt={`Slide ${index + 1}`} style={{ borderRadius: '15px' }} />
        </div>
      );
      return result;
    }, []).map((chunk, index) => (
      <CarouselItem
        onExiting={this.onExiting}
        onExited={this.onExited}
        key={index}
      >
        <div className="row">
          {chunk}
        </div>
      </CarouselItem>
    ));

    return (
      <div className='content'>
        <div className="container-fluid div-container">
          <div className='home-title'>
            <h3>Olá</h3>
            <h4>Bem vindo(a)!</h4>
          </div>
          <div className='container-card'>
            <h5>Eai! Vamos escolher o que hoje?</h5>
            <div className="d-flex flex-lg-row flex-column cards">
              <div className="card">Bebidas</div>
              <div className="card">Doces</div>
              <div className="card">Salgados</div>
              <div className="card">Refeições</div>
              <div className="card">Combos</div>
            </div>
          </div>

          <div className="container-bests">
            <h5>Promoções do dia</h5>
            <div className="d-flex flex-column">
              <Carousel activeIndex={activeIndex} next={this.next} previous={this.previous}>
                {slides}
                <CarouselControl direction="prev" onClickHandler={this.previous} />
                <CarouselControl direction="next" onClickHandler={this.next} />
              </Carousel>
            </div>
          </div>

          <div className="container-feedbacks">
            <h5>Feedbacks</h5>
            <div className="feedbacks d-flex flex-lg-row flex-column">
              <div className="card"></div>
              <div className="card"></div>
              <div className="card"></div>
              <div className="card"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
