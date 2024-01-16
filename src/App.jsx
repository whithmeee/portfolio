import React, { useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Works from './components/works/Works';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';
import Modal from './components/ui/modal/Modal';
import imgModal from './assets/8459743.jpg';
import Button from './components/ui/button/Button';

function App() {
    const [isOpen, setIsOpen] = useState(false);

    const handleCLickOpen = () => {
        setIsOpen(false);
    };
    return (
        <>
            <Header />

            {isOpen && (
                <Modal handleCLickOpen={handleCLickOpen}>
                    <h2>Письмо отправлено!</h2>
                    <img src={imgModal} alt="#" />
                    <Button handleCLickOpen={handleCLickOpen}>Закрыть</Button>
                </Modal>
            )}

            <main className="main">
                <Home />
                <About />
                <Skills />
                <Works />
                <Contact setIsOpen={setIsOpen} />
            </main>
            <Footer />
            <ScrollUp />
        </>
    );
}

export default App;
