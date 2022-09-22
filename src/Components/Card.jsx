import React from 'react';

const Card = () => {
    return (
        <>
            <div className="card">
        <div className="servicio">            
          <div className="img-conteiner">
            <img className="img-serv" src="/ImgSpa/piedras.jpg" alt="piedras" />
          </div>
          <div className="servicio_pie">
            <h3>Masaje con piedras</h3>
            <hr />
            <div className="rating">
              <i className="bx bxs-star" />
              <i className="bx bxs-star" />
              <i className="bx bxs-star" />
              <i className="bx bxs-star" />
              <i className="bx bx-star" />
            </div>
            <div className="precio">$1200</div>
          </div>
          <div className="bottom">
            <div className="btn__group">
              <a href="#" className="btn addToCart">Añadir al Carrito</a>
            </div>
          </div>
        </div></div>
        </>
    );
}

export default Card;
