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
                        <img className="contact-icon" src="/icons/location.svg" alt="Ubicación icono" />
                        <h1 className="title-contact-card">DIRECCIÓN</h1>
                        <p className="text-contact-card">Av. Siempre Viva 123, Springfield</p>
                    </div>
                    <div className="phone-container">
                        <img className="contact-icon" src="/icons/phone.svg" alt="Teléfono icono" />
                        <h1 className="title-contact-card">TELÉFONO</h1>
                        <p className="text-contact-card">+1 (555) 123-4567</p>
                    </div>
                    <div className="email-container">
                        <img className="contact-icon" src="/icons/email.svg" alt="Correo icono" />
                        <h1 className="title-contact-card">CORREO</h1>
                        <p className="text-contact-card"> citas@dentiq.com</p>
                    </div>
                </div>
            </div>
            <div className="contacto-right">

            </div>
        </div>

    );
}