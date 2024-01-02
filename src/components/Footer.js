import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/subroto.png";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/github-mark-white.svg';
import navIcon3 from '../assets/img/google-play.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <div height="50"></div>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}

          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/kumarsubroto"><img src={navIcon1} alt="" /></a>
              <a href="https://github.com/subrotokumar"><img src={navIcon2} alt="" /></a>
              <a href="https://play.google.com/store/apps/developer?id=Subroto+Kumar"><img src={navIcon3} alt="" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
