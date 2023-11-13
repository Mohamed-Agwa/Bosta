import logo from './logo.svg';
import React from 'react';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import './bootstrap.min.css';
import store from './Store';
import { Provider } from 'react-redux';
import Footer from './components/Footer';
import Header from './components/Header';
import Shipment from './components/Shipment';
import { BrowserRouter as Router, HashRouter, Routes, Route, Link } from 'react-router-dom';
import Landingpage from './screens/Landingpage';
import Tracking from './screens/Tracking';
import { useTranslation } from 'react-i18next';

function App() {
  const [t, i18n] = useTranslation('');
  document.documentElement.dir = t("header19");

  return (
    <>
      <Provider store={store}>
        <Router basename="/Bosta" >
          <Routes>
            <Route path='/' element={<Landingpage />} />
            <Route path='/tracking' element={<Tracking />} />
          </Routes>
        </Router>
      </Provider>
    </>
  );
}

export default App;
