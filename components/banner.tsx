import '@/styles/banner.css';
import Button from '@/components/ui/Button';
export default function Banner(){
    return(
        <>
            <div className="banner-container">
                <h1 className="banner-title">¿Listo para cuidar tu sonrisa?</h1>
                <span className='banner-span'>Únete a más de 4,200 pacientes que ya gestionan sus citas con nosotros.</span>
                <div className="cta-container">
                    <Button className='banner-cta' textBtn='Agendar mi primera cita'
                        buttonIcon='/icons/arrow-right.svg' />
                </div>
            </div>
        </>
    );
}