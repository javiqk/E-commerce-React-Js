import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <h4 className="titulos-footer">Monkey Argentina</h4>
            <ui className="list-unstyled">
              <li>(011) 1568983506</li>
              <li>Buenos Aires, Argentina</li>
              <li>Calle Falsa 123</li>
            </ui>
          </div>
          <div className="col">
            <h4 className="titulos-footer">Redes Sociales</h4>
            <ui className="list-unstyled">
            <div className="contenedor">
              <li className="flex-icons">Facebook</li>
              <FacebookIcon/>
            </div>
            <div className="contenedor">
              <li>Instagram</li>
              <InstagramIcon/>
            </div>
            <div className="contenedor">
              <li>Twitter</li>
              <TwitterIcon/>
            </div>
            </ui>
          </div>
          <div className="col">
            <h4 className="titulos-footer">Sobre Nosotros</h4>
            <ui className="list-unstyled">
              <li>Contact</li>
              <li>About us</li>
              <li>Work with us</li>
            </ui>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Javier Cucarella | All rights reserved 
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;