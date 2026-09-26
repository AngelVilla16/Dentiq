import '@/styles/hero.css';
import Button from '@/components/ui/Button';
export default function Hero(){
    return(
        <>
        <div className="hero">
                <div className="left">
                <div className="label">
                    Dentiq
                </div>
                <h1 className="title">
                    Tu sonrisa merece la mejor atención
                </h1>
                <p className="description">
                    Agenda tu cita dental en segundos, recibe recordatorios automaticos y accede a tu historial clinico desde cualquier lugar.
                </p>
                <div className="actions">
                    <Button className="btn-primary" textBtn="Agendar cita" />
                    <Button className="btn-secondary" textBtn="Cómo funciona" />
                </div>
                <div className="reviews">
                    <div className="review">
                        <span className='rev-title'>+4,200</span>
                        <p>Pacientes atendidos</p>
                    </div>
                    <div className="review">
                        <span className='rev-title'>98%</span>
                        <p>Satisfacción</p>
                    </div>
                    <div className="review">
                        <span className='rev-title'>24/7</span>
                        <p>Disponibilidad</p>
                    </div>

                </div>
            </div>
            <div className="right">
              <div className="img-container">
                <img src="/assets/sonrisa.png" alt="Hero Image" loading='lazy' />
              </div>
            </div>
        </div>
        </>
    );
}