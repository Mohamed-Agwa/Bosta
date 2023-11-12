import React from 'react';
import '../bootstrap.min.css';
import '../index.css';
import { useState } from 'react';
import { getDetails } from '../actions/guestActions';
import { Navbar, Nav, Container, NavDropdown, Button, Row, Col, NavItem, NavLink } from 'react-bootstrap';
import { connect } from 'react-redux';
import { guestReducer } from '../reducers/guestReducer';
import { useNavigate } from 'react-router-dom';
import {useTranslation} from 'react-i18next';

const Header = (props) => {
  const [t, i18n] = useTranslation('');
  const navigate = useNavigate();
  const [shipno, setShipno] = useState('');
  const onSubmit = evt => {
    evt.preventDefault();
    if (shipno === "") {
      alert("Please enter something!");
    } else {
      props.getDetails(shipno);
      setShipno("");
    }
    navigate('/tracking')  
    
  };
  return (

    <Navbar style={{backgroundColor: 'white' }} bg="light" data-bs-theme="light" collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand href="#home">
        {i18n.language == 'ar'?
        <span className='brand1' role="img" tabindex="-1" class="anticon br-navbar__logo">
  <svg width="5em" height="5em" viewBox="0 0 112 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" class="">
    <path d="M10.0955 10.9068C10.9901 10.9068 11.7355 10.1617 11.7355 9.2675C11.7355 8.37335 10.9901 7.62823 10.0955 7.62823C9.20096 7.62823 8.45549 8.37335 8.45549 9.2675C8.45549 10.1989 9.20096 10.9068 10.0955 10.9068Z" fill="#E30613"></path>
    <path d="M6.14454 10.9068C7.0391 10.9068 7.78457 10.1617 7.78457 9.2675C7.78457 8.37335 7.0391 7.62823 6.14454 7.62823C5.24998 7.62823 4.50451 8.37335 4.50451 9.2675C4.50451 10.1989 5.24998 10.9068 6.14454 10.9068Z" fill="#E30613"></path>
    <path d="M67.4219 20.7424H64.3282V12.3225H58.5136C55.4944 12.3225 53.0344 15.1912 53.0344 18.209C53.0344 21.2268 55.4944 23.6857 58.5136 23.6857H61.3464C61.3464 23.9837 61.2718 24.5426 60.7127 24.9524C60.1909 25.3622 58.7372 25.921 55.979 25.2877L55.3453 28.0819C56.4263 28.3427 57.3581 28.4172 58.1781 28.4172C60.2282 28.4172 61.5327 27.7839 62.3155 27.1505C63.3964 26.2936 64.03 24.9896 64.03 23.6112H70.6274V12.248H67.4219V20.7424ZM61.1227 20.7424H59.0727C57.5445 20.7424 56.2772 19.5875 56.2772 18.06C56.2772 16.5325 57.5072 15.2658 59.0727 15.2658H61.1227V20.7424Z" fill="#E30613"></path>
    <path d="M69.0247 25.0641C68.1301 25.0641 67.3846 25.8093 67.3846 26.7034C67.3846 27.5976 68.1301 28.3427 69.0247 28.3427C69.9192 28.3427 70.6647 27.5976 70.6647 26.7034C70.6647 25.8093 69.9192 25.0641 69.0247 25.0641Z" fill="#E30613"></path>
    <path d="M47.7043 18.8424C47.7043 19.9228 46.8843 20.7424 45.8034 20.7424C44.7224 20.7424 44.0888 19.9228 44.0888 18.8424V14.1853H40.846V18.7678C40.846 19.8483 39.9515 20.7424 38.8705 20.7424H37.7523V14.1853H34.5095V20.7424H30.484C30.484 20.7424 30.5586 20.6307 30.7077 20.4444C32.0868 18.3953 31.4904 15.3403 29.8131 13.6265C28.5831 12.3598 26.7194 11.7637 25.0048 12.0617C22.5448 12.4715 21.4266 13.9245 19.5257 16.5697V7.62823H16.2829V20.7052H13.1892V12.2853H6.03271C3.05084 12.2853 0.92627 14.6697 0.92627 18.06C0.92627 21.4876 3.31176 23.9837 6.21908 23.9837C7.82183 23.9837 9.05186 23.3876 9.87187 22.2699L9.94641 22.1582L10.5055 23.6484H39.206C40.5105 23.6484 41.666 23.1268 42.5233 22.2699C43.3806 23.1268 44.5361 23.6484 45.8406 23.6484C48.4125 23.6484 50.9471 21.5621 50.9471 18.9914V12.2853H47.7043V18.8424ZM9.94641 18.0972C9.94641 19.9973 8.79094 21.115 7.03909 21.115C5.28725 21.115 4.16904 20.0346 4.16904 18.0972C4.16904 16.1599 5.28725 15.2658 7.03909 15.2658H9.94641V18.0972ZM28.2103 18.06C28.1358 18.4325 27.9867 18.8051 27.7631 19.1777C27.1294 20.2208 25.8994 20.7424 24.6694 20.7424H19.302C19.302 20.7424 20.6066 19.1404 21.3521 18.2835C22.5448 16.905 23.7748 15.2658 25.4521 14.9677C27.3158 14.6697 28.5085 16.4207 28.2103 18.06Z" fill="#E30613"></path>
    <path d="M110.957 8.33609L96.9424 0.25148C96.3833 -0.0838266 95.6751 -0.0838266 95.116 0.25148L81.1012 8.33609C80.5421 8.67139 80.1694 9.26749 80.1694 9.9381V21.7856C80.1694 22.4562 80.5048 23.0523 81.1012 23.3876L95.116 31.4722C95.4142 31.6213 95.7123 31.733 96.0478 31.733C96.3833 31.733 96.6815 31.6585 96.9796 31.4722L110.994 23.3876C111.554 23.0523 111.926 22.4562 111.926 21.7856V9.9381C111.889 9.26749 111.516 8.67139 110.957 8.33609ZM108.646 18.8424L103.465 15.8619L108.646 12.8814V18.8424ZM96.0105 3.45551L107.23 9.9381L96.0105 16.4207L84.7913 9.9381L96.0105 3.45551ZM83.4122 12.8441L88.5931 15.8246L83.4122 18.8051V12.8441ZM96.0105 28.2309L84.7913 21.7483L91.7987 17.6874L95.0787 19.5875C95.3769 19.7365 95.6751 19.8483 96.0105 19.8483C96.346 19.8483 96.6442 19.7738 96.9424 19.5875L100.222 17.6874L107.23 21.7483L96.0105 28.2309Z" fill="#E30613"></path>
  </svg>
</span>:<span role="img" className="anticon br-navbar__logo">
            <svg width="5em" height="5em" viewBox="0 0 111 34" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" className="">
              <path d="M32.6634 8.83273L17.7948 0.266462C17.2016 -0.0888208 16.4503 -0.0888208 15.8572 0.266462L0.9886 8.83273C0.39544 9.18801 0 9.81962 0 10.5302V23.0835C0 23.7941 0.355896 24.4257 0.9886 24.781L15.8572 33.3473C16.1735 33.5052 16.4899 33.6236 16.8458 33.6236C17.2016 33.6236 17.518 33.5447 17.8344 33.3473L32.7029 24.781C33.2961 24.4257 33.6915 23.7941 33.6915 23.0835V10.5302C33.6519 9.81962 33.2565 9.18801 32.6634 8.83273ZM30.2116 19.9649L24.715 16.8069L30.2116 13.6488V19.9649ZM16.8458 3.66139L28.7485 10.5302L16.8458 17.399L4.90345 10.5302L16.8458 3.66139ZM3.44032 13.6093L8.93695 16.7674L3.44032 19.9255V13.6093ZM16.8458 29.9129L4.90345 23.0441L12.3377 18.7412L15.8176 20.7545C16.134 20.9124 16.4503 21.0308 16.8062 21.0308C17.1621 21.0308 17.4785 20.9518 17.7948 20.7545L21.2747 18.7412L28.709 23.0441L16.8458 29.9129Z" fill="#E30613"></path>
              <path d="M65.6826 11.7934C61.57 11.7934 58.7229 14.5962 58.7229 18.6228C58.7229 22.6493 61.57 25.4521 65.6431 25.4521C69.7556 25.4521 72.6028 22.6493 72.6028 18.6228C72.6028 14.5962 69.7556 11.7934 65.6826 11.7934ZM65.6826 22.3335C63.5472 22.3335 62.2027 20.8729 62.2027 18.6228C62.2027 16.3726 63.5868 14.912 65.6826 14.912C67.7389 14.912 69.1625 16.4121 69.1625 18.6228C69.1229 20.8334 67.7389 22.3335 65.6826 22.3335Z" fill="#E30613"></path>
              <path d="M80.2743 17.2016C78.653 16.9648 77.2294 16.7674 77.2294 15.6621C77.2294 15.1094 77.6249 14.3988 79.4439 14.3988C80.907 14.3988 81.9747 15.0304 82.2911 16.1358L85.415 15.4252C84.7428 13.0567 82.6865 11.7539 79.6416 11.7539C76.2408 11.7539 73.9473 13.333 73.9473 15.7015C73.9473 19.0175 76.8735 19.4123 79.2462 19.7676C80.907 20.0044 82.3701 20.2018 82.3701 21.3861C82.3701 22.0177 81.8956 22.7677 79.6416 22.7677C77.9412 22.7677 76.7944 22.1361 76.4385 20.9913L73.3146 21.6229C74.0264 24.0704 76.1617 25.3731 79.5625 25.3731C83.3192 25.3731 85.6918 23.7941 85.6918 21.2676C85.7314 17.9911 82.7261 17.5569 80.2743 17.2016Z" fill="#E30613"></path>
              <path d="M92.2562 22.4914C91.228 22.4914 90.6348 21.7808 90.6348 20.5571V15.0305H95.9338V12.1487H90.6348V8.12217H87.1945V20.5965C87.1945 23.7151 88.9344 25.4916 91.9398 25.4916C94.5497 25.4916 96.2501 24.3073 96.8433 22.0966L94.0752 21.2282C93.7588 22.0177 93.1261 22.4914 92.2562 22.4914Z" fill="#E30613"></path>
              <path d="M107.639 13.8067L107.52 13.6488C106.65 12.425 105.227 11.7934 103.328 11.7934C99.8486 11.7934 97.3573 14.6752 97.3573 18.6227C97.3573 22.6098 99.8486 25.4916 103.249 25.4916C105.147 25.4916 106.571 24.8205 107.481 23.5178L107.599 23.3599V23.3993L108.271 25.1363H111V12.1882H108.271L107.639 13.8067ZM104.159 22.3335C102.142 22.3335 100.798 20.8729 100.798 18.5833C100.798 16.3332 102.103 14.8725 104.159 14.8725C106.215 14.8725 107.56 16.3332 107.56 18.5833C107.56 20.8334 106.176 22.3335 104.159 22.3335Z" fill="#E30613"></path>
              <path d="M51.4863 11.7937C49.6673 11.7937 48.2832 12.4253 47.3737 13.649L47.176 13.9254V8.16189H43.7357V25.1365H46.4642L47.176 23.3206L47.2946 23.4785C48.2437 24.8207 49.6673 25.4918 51.5258 25.4918C55.0057 25.4918 57.4179 22.689 57.4179 18.6625C57.3783 14.5965 54.9662 11.7937 51.4863 11.7937ZM50.6163 22.3337C49.0346 22.3337 47.176 21.7021 47.176 18.5835C47.176 16.2939 48.5205 14.8333 50.6559 14.8333C52.6331 14.8333 53.938 16.3334 53.938 18.5835C53.8985 20.8337 52.5935 22.3337 50.6163 22.3337Z" fill="#E30613"></path>
            </svg>
          </span>}
        
          
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title={t("header1")} id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">{t("header7")}</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              {t("header8")}
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">{t("header9")}</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title={t("header2")} id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">{t("header10")}</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              {t("header11")}
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">{t("header12")}</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title={t("header3")} id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">{t("header13")}</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              {t("header14")}
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#action/3.1">{t("header4")}</Nav.Link>
            <Nav.Link href="#action/3.1">{t("header5")}</Nav.Link>
            <NavDropdown title={t("header6")} id="collapsible-nav-dropdown">
              <Container>
                <Container className="textrig">
                  <p>{t("header15")}</p>
                  

                </Container>
                <Container style={{display : "flex"}}>
                  <input placeholder={t("header16")} className="ant-input" type="text" value={shipno} onChange={event => setShipno(event.target.value)} />
                  <button type="submit" style={{backgroundColor : "red"}} onClick={onSubmit} className="ant-btn ant-btn-primary ant-input-search-button">
                    <svg width="20" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 21L28 28" stroke="white" strokeWidth="3" strokeLinecap="round"></path>
                      <circle cx="13" cy="13" r="11" stroke="white" strokeWidth="3"></circle>
                    </svg>
                  </button>

                </Container>

              </Container>
            </NavDropdown>
            


          </Nav>
          
          <Nav className="sign-in-b">
          {
              i18n.language == 'en' && <Button onClick={() => {
                i18n.changeLanguage('ar');
              }} >AR</Button>
            }
            {
              i18n.language == 'ar' && <Button onClick={() => {
                i18n.changeLanguage('en');
              }} >EN</Button>
            }
            <Nav.Link href="#">{t("header17")}</Nav.Link>
          </Nav>
          <Nav className="sign-up-b">
            <Nav.Link href="#">{t("header18")}</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
const mapStateToProps = state => ({
  guest : state.guest.details
})

export default connect(mapStateToProps, { getDetails })(Header);
