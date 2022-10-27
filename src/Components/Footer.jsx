import React from 'react';

const Footer = () => {
    return (
        <>
            <footer>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3365.6334116178678!2d-58.23540708428798!3d-32.48249565587366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95afdb0046e660ff%3A0xedb1693ec52a5bba!2s8%20de%20Junio%20740%2C%20Concepci%C3%B3n%20del%20Uruguay%2C%20Entre%20R%C3%ADos!5e0!3m2!1ses!2sar!4v1656811286804!5m2!1ses!2sar" width="100%" height={450} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        <div className="text-footer">
          <h4>RELAX SPA</h4>
          <p>8 de Junio 740,concepcion del uruguay, entre rios, Argentina</p>
          <p>RelaxSpa@gmail.com</p>
          <p>Tel: +54 3442 472020</p>
          <p>Horario de Atencion: De Lunes a Viernes de 10 a 18 hs</p>
          <p>Todos los derechos Reservados</p>
        </div>
        <div>
          <ul className="contacto" id="contacto">
            <li>
              <a href="https://es-la.facebook.com/" target="_blank">
                <i className="bx bxl-facebook-circle bx-border-circle icono-contacto" />
              </a>              
            </li>
            <li>
              <a href="https://twitter.com/" target="_blank"><i className="bx bxl-twitter bx-border-circle icono-contacto" /></a>
            </li>
            <li>   
              <a href="https://www.instagram.com/" target="_blank"><i className="bx bxl-instagram bx-border-circle icono-contacto" /></a>
            </li>             
          </ul>
        </div>
      </footer>  
        </>
    );
}

export default Footer;
