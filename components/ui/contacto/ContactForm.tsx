import Button from "@/components/ui/Button";

export default function ContactForm(){
    return(
        <div className="form">
            <form className="contact-form" action="#" method="post">
                <div className="form-row">
                    <div className="form-field">
                        <label htmlFor="nombre" className="form-label">NOMBRE</label>
                        <input type="text" id="nombre" name="nombre" className="form-input" placeholder="Tu nombre"/>
                    </div>
                    <div className="form-field">
                        <label htmlFor="telefono" className="form-label">TELÉFONO</label>
                        <input type="tel" id="telefono" name="telefono" className="form-input" placeholder="Tu teléfono"/>
                    </div>
                </div>

                <div className="form-field">
                    <label className="form-label" htmlFor="correo">CORREO ELECTRÓNICO</label>
                    <input className="form-input" type="email" id="correo" name="correo" placeholder="tu@correo.com"/>
                </div>

                <div className="form-field">
                    <label className="form-label" htmlFor="mensaje">MENSAJE</label>
                    <textarea className="form-input" id="mensaje" name="mensaje" placeholder="¿En qué podemos ayudarte?"></textarea>
                </div>

                <Button className="form-submit" textBtn="Enviar mensaje" type="submit"/>
            </form>
        </div>
    );
}
