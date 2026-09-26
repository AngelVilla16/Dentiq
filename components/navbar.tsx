"use client";

import Button from "@/components/ui/Button";
import '@/styles/navbar.css';

export default function Navbar() {
    return(
        <>
            <header>
                <nav>
                    <div className="left-nav">
                        <a href="/" className="nav-title">Dentiq</a>

                    </div>
                    <div className="right-nav">
                        <div className="nav-link">
                            <ul>
                                <li><a href="#servicios">Servicios</a></li>
                                <li><a href="#como-funciona">Cómo funciona</a></li>
                                <li><a href="#testimonios">Testimonios</a></li>
                                <li><a href="#contacto">Contacto</a></li>
                            </ul>
                        </div>
                        <div className="options-nav">
                            <Button className="btn-primary-nav" textBtn="Agendar"/>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
}