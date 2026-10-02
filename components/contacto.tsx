import ContactForm from "@/components/ui/contacto/ContactForm";
import "@/styles/contacto.css";

export default function Contacto() {
    return(

        <div className="contacto-container">
            <div className="contacto-left">
                <div className="contacto-left-header">
                    <span className="contacto-badge">
                        CONTACTÁNOS
                    </span>
                    <h2 className="contacto-title">Estamos aquí para ayudarte</h2>
                    <p className="contacto-text">
                        Escribenos para cualquier consulta. Tambien puedes visitarnos directamente en nuestra clínica.
                    </p>
                </div>
                <div className="contacto-info">
                    <div className="location-container">
                        <img className="contact-icon" src="/icons/location.svg" alt="" />
                        <p className="title-contact-card">DIRECCIÓN</p>
                        <p className="text-contact-card">Av. Siempre Viva 123, Springfield</p>
                    </div>
                    <div className="phone-container">
                        <img className="contact-icon" src="/icons/phone.svg" alt="" />
                        <p className="title-contact-card">TELÉFONO</p>
                        <p className="text-contact-card">+1 (555) 123-4567</p>
                    </div>
                    <div className="email-container">
                        <img className="contact-icon" src="/icons/mail.svg" alt="" />
                        <p className="title-contact-card">CORREO</p>
                        <p className="text-contact-card">citas@dentiq.com</p>
                    </div>
                    <div className="horario-container">
                        <img className="contact-icon" src="/icons/clock.svg" alt="" />
                        <p className="title-contact-card">HORARIO</p>
                        <p className="text-contact-card">Lun – Vie: 8:00 am – 6:00 pm · Sáb: 9:00 am – 2:00 pm</p>
                    </div>
                </div>
            </div>
            <div className="contacto-right">
                <ContactForm />
            </div>
        </div>

    );
}
