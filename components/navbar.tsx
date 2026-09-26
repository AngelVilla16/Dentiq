"use client";

import { useState } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import '@/styles/navbar.css';

const LINKS = [
    { href: "#servicios", label: "Servicios" },
    { href: "#funcionamiento", label: "Cómo funciona" },
    { href: "#testimonios", label: "Testimonios" },
    { href: "#contacto", label: "Contacto" }
];

export default function Navbar() {
    // single source of truth for the mobile panel, mirrored onto the header as
    // `data-open` so the CSS can drive the open/close visuals
    const [open, setOpen] = useState(false);

    return(
        <header className="nav-header" data-open={open}>
            <nav className="nav-bar">
                <Link href="/" className="nav-title">Dentiq</Link>

                <ul className="nav-list">
                    {LINKS.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                className="nav-link"
                                onClick={() => setOpen(false)}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="nav-actions">
                    <Button className="btn-primary-nav" textBtn="Agendar" />
                    <button
                        className="nav-toggle"
                        aria-expanded={open}
                        aria-label="Abrir menú"
                        onClick={() => setOpen((prev) => !prev)}
                    >
                        <span className="nav-toggle-bar" />
                        <span className="nav-toggle-bar" />
                        <span className="nav-toggle-bar" />
                    </button>
                </div>
            </nav>
        </header>
    );
}
